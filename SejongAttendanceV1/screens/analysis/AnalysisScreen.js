import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import UnPassCourseCard from '../../components/course/UnPassCourseCard';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import parseXlsxData from '../../utils/parseXlsxData';
import {useSelector, useDispatch} from 'react-redux';
import {setUnpassLectures} from '../../redux/Actions';
import useAsyncStorage from '../../utils/useasyncstorage';

const AnalysisScreen = ({route}) => {
  const isFocused = useIsFocused();
  //const [courses, setCourses] = useState([]);
  const [allLectures, setAllLectures] = useState([]);
  const [isSaved, setIsSaved] = useState([]);
  const [isParse, setIsParse] = useState(0);
  const unPassLectures = useSelector(state => state.unPassLectures);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [sortedLectures, setSortedLectures] = useState([]);

  // useEffect(() => {
  //   getAsyncCourses({});
  // }, [isFocused]);

  // useEffect(() => {
  //   for (let i in courses) {
  //     parseXlsxData(
  //       courses[i].dept_id,
  //       courses[i].course_id,
  //       courses[i].class_id,
  //       '18011531',
  //     )
  //       .then(data => {
  //         //console.log(data);
  //         if (
  //           isSaved.findIndex(val => val === `${courses[i].course_id}`) ===
  //             -1 &&
  //           flag === false
  //         ) {
  //           //setAllLectures([...allLectures, ...data]);
  //           for (let j in data) {
  //             if (data[j].lecture_status === 2) {
  //               console.log('실행');
  //               //console.log(data[j]);
  //               //setAllLectures(val => [...val, data[j]]);
  //               dispatch(setUnpassLectures(data[j]));
  //               console.log('실행안됨');
  //               //setAllLectures(val => [data[j]]);
  //               //console.log(allLectures);
  //             }
  //           }
  //           setIsSaved(val => [...val, `${courses[i].course_id}`]);
  //           if (isSaved.length === courses.length) {
  //             setFlag(true);
  //           }
  //           // for (let i in allLectures) {
  //           //   if (allLectures[i].lecture_status === 2) {
  //           //     dispatch(setUnpassLectures(allLectures[i]));
  //           //   }
  //           // }
  //         } else {
  //           console.log('똑같은거');
  //           console.log(courses[i].course_id);
  //         }
  //         setIsParse(val => val + 1);
  //       })
  //       .catch(error => {
  //         setIsParse(data => data + 1);
  //       });
  //   }
  //   console.log('all');
  //   // console.log(allLectures);
  //   // console.log(isSaved.length);
  //   console.log(isSaved);
  //   // console.log(courses.length);
  // }, [courses, setIsParse, setIsSaved, isSaved, flag, dispatch]);
  // //, isSaved, setIsSaved

  // function useAsyncStorage(key, initialValue) {
  //   const [storedValue, setStoredValue] = useState(initialValue);
  //   useEffect(() => {
  //     AsyncStorage.getItem(key)
  //       .then(value => {
  //         if (value === null) return initialValue;
  //         return JSON.parse(value);
  //       })
  //       .then(setStoredValue)
  //   }, [key, initialValue]);

  //   const setValue = value => {
  //     const valueToStore = value instanceof Function ? value(storedValue) : value;
  //     setStoredValue(valueToStore);
  //     AsyncStorage.setItem(key, JSON.stringify(valueToStore));
  //   }

  //   return [storedValue, setValue];
  // }

  const [courses, setCourses] = useAsyncStorage(Config.COURSES_KEY, {});
  // function getAsyncCourses(initialValue) {
  //   // try {
  //   console.log('async courses');
  //   useEffect(() => {
  //     AsyncStorage.getItem(Config.COURSES_KEY)
  //       .then(value => {
  //         if (value === null) return initialValue;
  //         return JSON.parse(value);
  //       })
  //       .then(setCourses);
  //   }, [initialValue]);

  //   const setValue = value => {
  //     const valueToStore = value instanceof Function ? value(courses) : value;
  //     setCourses(valueToStore);
  //     AsyncStorage.setItem(Config.COURSES_KEY, JSON.stringify(valueToStore));
  //   };
  //   return [courses, setValue];
  //   // const value = await AsyncStorage.getItem(Config.COURSES_KEY);
  //   // if (value !== null) {
  //   //   const data = JSON.parse(value);
  //   //   setCourses(data.courses);
  //   // }
  //   // } catch (e) {
  //   //   console.log('강의 불러오기 실패');
  // }

  // useEffect(() => {
  //   if (
  //     isSaved.length !== 0 &&
  //     isSaved.length === courses.length &&
  //     flag === false
  //   ) {
  //     console.log('ㅇㅇㅇ');
  //     // setAllLectures(val =>
  //     //   val.sort((a, b) => {
  //     //     //console.log(a, b);

  //     //     if (a.end_date < b.end_date) {
  //     //       return 1;
  //     //     }
  //     //     if (a.end_date > b.end_date) {
  //     //       return -1;
  //     //     }
  //     //     return 0;
  //     //   }),
  //     // );
  //     dispatch(setUnpassLectures([...allLectures]));
  //     setFlag(true);
  //   }
  // }, [isSaved]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.title}>급한거🔥</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {console.log('rerender')}
        {courses.length > 0
          ? courses.map((course, idx) => (
              <UnPassCourseCard
                key={idx}
                courses={courses}
                course={course}
                deptId={course.dept_id}
                courseId={course.course_id}
                classId={course.class_id}
                studentId={'18011531'}
                // unPassLectures={unPassLectures}
                // setUnpassLectures={setUnpassLectures}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                flag={flag}
                setFlag={setFlag}
                isParse={isParse}
                setIsParse={setIsParse}
              />
            ))
          : null}
        {/* {unPassLectures.length > 0 ? (
          unPassLectures.map((lectureData, idx) => (
            <CourseCard
              key={`${idx} ${new Date()}`}
              lectureData={lectureData}
            />
          ))
        ) : (
          <View style={styles.emptyAttendanceContainer}>
            <Text style={styles.emptyAttendanceText}>수강 완료🚀</Text>
          </View>
        )} */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#f4f3f6',
  },
  title: {
    fontSize: scale * 28,
    fontWeight: 'bold',
    marginTop: height * 95,
    marginLeft: width * 16,
    marginBottom: height * 14,
  },
  week: {
    fontSize: scale * 18,
    fontWeight: 'bold',
    marginLeft: width * 18,
    marginTop: height * 8,
  },
  emptyAttendanceContainer: {
    marginTop: height * 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyAttendanceText: {
    fontSize: scale * 16,
    fontWeight: 'bold',
    color: '#979799',
  },
  goToProfileButtonText: {
    fontSize: scale * 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
export default AnalysisScreen;
