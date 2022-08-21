import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActionSheetIOS,
} from 'react-native';
import {Section, TableView} from 'react-native-tableview-simple';
import RNExitApp from 'react-native-exit-app';
import Profile from '../../components/profile/Profile';
import {height, width, scale} from '../../config/globalStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import CourseTable from '../../components/profile/CourseTable';

import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({navigation}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      {course: '데이터베이스', course_num: '009959-001'},
      {course: '기계학습', course_num: '009959-001'},
      {course: '운영체제', course_num: '009959-001'},
      {course: '컴퓨터네트워크', course_num: '009959-001'},
      {course: '알고리즘', course_num: '009959-001'},
      {course: '자료구조', course_num: '009959-001'},
      {course: '무선통신', course_num: '009959-001'},
    ]);
  }, []);

  const removeStudent = async () => {
    try {
      await AsyncStorage.removeItem(Config.STUDENT_ID_KEY);
      console.log('삭제 완료');
    } catch (e) {
      console.log('삭제 실패');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        <View style={styles.container}>
          <Profile />
          <View style={styles.row1}>
            <Text style={styles.subtitle}>과목 설정</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('addcourse');
              }}>
              <Ionicons name="add-circle-outline" style={styles.addIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.shadow}>
            {courses.length > 0 ? (
              <TableView style={styles.tableview}>
                <Section roundedCorners={true} hideSurroundingSeparators={true}>
                  {courses.map(course => (
                    <CourseTable
                      key={course.course}
                      course={course.course}
                      course_num={course.course_num}
                    />
                  ))}
                </Section>
              </TableView>
            ) : (
              <Text style={styles.addCourseText}>
                오른쪽 위의 + 버튼을 눌러 과목을 추가해주세요.
              </Text>
            )}
          </View>
          <Text style={styles.subtitle}>문의하기</Text>
          <View style={styles.margin1}>
            <TouchableOpacity
              style={{...styles.btn, ...styles.row1}}
              onPress={() => navigation.navigate('credit')}>
              <Text style={{...styles.text, alignSelf: 'center'}}>
                만든 솨람
              </Text>
              <Entypo name={'chevron-thin-right'} style={styles.chevronIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.margin2}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                ActionSheetIOS.showActionSheetWithOptions(
                  {
                    options: ['취소', '계정 삭제하기'],
                    destructiveButtonIndex: 1,
                    cancelButtonIndex: 0,
                    title: `저장된 데이터가 모두 삭제됩니다.\n계정을 삭제하시겠습니까?`,
                  },
                  buttonIndex => {
                    if (buttonIndex === 1) {
                      removeStudent();
                      RNExitApp.exitApp();
                    }
                  },
                );
              }}>
              <Text style={{...styles.text, color: '#eb5828'}}>
                계정 삭제하기
              </Text>
            </TouchableOpacity>
            <Text style={styles.deleteText}>
              기기에 있는 사용자의 데이터는 서버에 저장되지 않으며 계정 삭제 시
              등록한 정보가 모두 초기화됩니다.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f6',
  },
  subtitle: {
    marginLeft: width * 16,
    marginTop: height * 18,
    fontSize: scale * 20,
    fontWeight: 'bold',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shadow: {
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {height: 2},
  },
  tableview: {
    marginHorizontal: width * 16,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 60,
    marginTop: height * 30,
    marginBottom: height * 14,
  },
  margin1: {
    marginTop: height * 15,
  },
  margin2: {
    marginTop: height * 44,
  },
  btn: {
    backgroundColor: '#ffffff',
    marginHorizontal: width * 16,
    height: height * 44,
    borderRadius: 14,
    justifyContent: 'center',
  },
  text: {
    fontSize: scale * 17,
    marginLeft: width * 16,
    justifyContent: 'center',
  },
  chevronIcon: {
    color: '#c4c4c6',
    fontSize: scale * 16,
    alignSelf: 'center',
    marginRight: width * 16,
  },
  deleteText: {
    marginLeft: width * 25,
    marginRight: width * 34,
    marginVertical: height * 8,
    fontSize: scale * 10,
    color: '#86858c',
  },
});

export default ProfileScreen;
