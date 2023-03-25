import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Section, TableView} from 'react-native-tableview-simple';
import {height, width, scale} from '../../config/globalStyles';

import CourseTable from './CourseTable';

const MapCourseTable = ({navigation, courses}) => {
  const [delCourse, setDelCourse] = useState(0);
  return (
    <View style={styles.shadow}>
      {courses.length > 0 ? (
        <TableView style={styles.tableview} appearance={'light'}>
          <Section roundedCorners={true} hideSurroundingSeparators={true}>
            {courses.map((course, idx) => (
              <CourseTable
                key={idx}
                course_idx={idx}
                course={course.name}
                course_num={`${course.course_id}-${course.class_id}`}
                courses={courses}
                navigation={navigation}
                setDelCourse={setDelCourse}
              />
            ))}
          </Section>
        </TableView>
      ) : (
        <View style={styles.emptyContainer}>
          <View>
            <Text style={styles.addCourseText}>
              아직 추가된 강의 정보가 없어요.
            </Text>
            <Text style={styles.addCourseText}>
              오른쪽 위의 + 버튼을 눌러 강의를 추가해주세요.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tableview: {
    marginHorizontal: width * 16,
  },
  shadow: {
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {height: 2},
  },
  addIcon: {
    fontSize: scale * 20,
    color: '#007aff',
    marginRight: width * 26,
    marginTop: height * 21,
  },
  addCourseText: {
    fontSize: scale * 14,
    fontWeight: 'bold',
    color: '#979799',
    alignSelf: 'center',
    marginHorizontal: width * 10,
    marginTop: height * 4,
  },
  emptyContainer: {
    height: height * 140,
    justifyContent: 'center',
  },
});

export default MapCourseTable;
