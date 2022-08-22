// import React, {useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {connect} from 'react-redux';

// let courseData = [];

// const mapStateToProps = state => ({
//   courseName: state.courseName,
//   courseNum: state.courseNum,
//   courseClass: state.courseClass,
//   courseDept: state.courseDept,
// });

// const pushCourseToStorage = (
//   courseName,
//   courseClass,
//   courseNum,
//   courseDept,
// ) => {
//   let singleCourseData = `{"name": "${courseName}", "course_id": "${courseNum}", "class_id": "${courseClass}", "dept_id": "${courseDept}"}`;
//   let jsonSingleData = JSON.parse(singleCourseData);
//   console.log(courseName);
//   courseData.push(jsonSingleData);
// };
// // connect(mapStateToProps)(pushCourseToStorage);

// const CourseAddStorage = async () => {
//   try {
//     pushCourseToStorage();
//     const course = JSON.stringify({courses: courseData});
//     await AsyncStorage.setItem('course', course);
//     console.log(course);
//   } catch (error) {
//     console.log('저장 실패');
//   }
// };

// export default CourseAddStorage;

// legacy; moved & declared inside of profileStackNavi
