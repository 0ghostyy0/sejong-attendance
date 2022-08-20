import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

let courseData = [];

const pushCourseToStorage = (courseName, courseClass, courseNum) => {
  let singleCourseData = `{"name": "${courseName}", "courseid": "${courseNum}", "classid": "${courseClass}"}`;
  let jsonSingleData = JSON.parse(singleCourseData);

  courseData.push(jsonSingleData);
};

const CourseAddStorage = async () => {
  try {
    pushCourseToStorage();
    const course = JSON.stringify({courses: courseData});
    await AsyncStorage.setItem('course', course);
    console.log(course);
  } catch (error) {
    console.log('저장 실패');
  }
};

export default CourseAddStorage;
