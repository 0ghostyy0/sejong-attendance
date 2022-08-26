import React from 'react';
import {StyleSheet, ActionSheetIOS} from 'react-native';
import {Cell} from 'react-native-tableview-simple';
import {height, width, scale} from '../../config/globalStyles';

import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const delCourse = async newCourses => {
  try {
    await AsyncStorage.setItem(
      Config.COURSES_KEY,
      JSON.stringify({courses: newCourses}),
    );
  } catch (e) {
    console.log('삭제 실패');
  }
};

const CourseTable = ({
  course_idx,
  course,
  course_num,
  courses,
  navigation,
  setDelCourse,
}) => {
  return (
    <Cell
      contentContainerStyle={styles.cell}
      cellStyle="Subtitle"
      accessory="DisclosureIndicator"
      accessoryColorDisclosureIndicator="#c4c4c6"
      title={course}
      detail={course_num}
      titleTextStyle={styles.titleText}
      subtitleTextStyle={styles.subtitleText}
      onPress={() => {
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options: ['취소', '삭제하기'],
            destructiveButtonIndex: 1,
            cancelButtonIndex: 0,
            title: `${course} (${course_num})`,
            // userInterfaceStyle: 'dark',
          },
          buttonIndex => {
            if (buttonIndex === 1) {
              courses.splice(course_idx, 1);
              delCourse(courses);
              setDelCourse(data => data + 1);
            }
          },
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  cell: {
    marginVertical: height * 8,
    //height: height * 59,
  },
  titleText: {
    fontSize: scale * 17,
    fontWeight: '500',
  },
  subtitleText: {
    color: '#7f7f7f',
    fontSize: scale * 12,
  },
});

export default CourseTable;
