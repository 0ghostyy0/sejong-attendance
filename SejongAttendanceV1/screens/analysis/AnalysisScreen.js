import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import CourseCard from '../../components/course/CourseCard';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import parseXlsxData from '../../utils/parseXlsxData';
import {useSelector, useDispatch} from 'react-redux';
import {setUnpassLectures} from '../../redux/Actions';

const AnalysisScreen = ({route}) => {
  const isFocused = useIsFocused();
  const [courses, setCourses] = useState([]);
  const [allLectures, setAllLectures] = useState([]);
  const [isSaved, setIsSaved] = useState([]);
  const [isParse, setIsParse] = useState(0);
  const unPassLectures = useSelector(state => state.unPassLectures);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [sortedLectures, setSortedLectures] = useState([]);

  useEffect(() => {
    getAsyncCourses();
  }, [isFocused]);

  useEffect(() => {
    for (let i in courses) {
      parseXlsxData(
        courses[i].dept_id,
        courses[i].course_id,
        courses[i].class_id,
        '18011531',
      )
        .then(data => {
          console.log(data);
          if (
            isSaved.findIndex(val => val === `${courses[i].course_id}`) === -1
          ) {
            //setAllLectures([...allLectures, ...data]);
            for (let j in data) {
              if (data[j].lecture_status === 2) {
                //console.log(data[j]);
                setAllLectures(val => [...val, data[j]]);
                //setAllLectures(val => [data[j]]);
                //console.log(allLectures);
              }
            }
            setIsSaved(val => [...val, `${courses[i].course_id}`]);
            // for (let i in allLectures) {
            //   if (allLectures[i].lecture_status === 2) {
            //     dispatch(setUnpassLectures(allLectures[i]));
            //   }
            // }
          } else {
            console.log('똑같은거');
            console.log(courses[i].course_id);
          }
          //setIsParse(val => val + 1);
        })
        .catch(error => {
          setIsParse(data => data + 1);
        });
    }
    console.log('all');
    // console.log(allLectures);
    // console.log(isSaved.length);
    // console.log(isSaved);
    // console.log(courses.length);
  }, [courses, setIsParse, isSaved, setIsSaved]);

  const getAsyncCourses = async () => {
    try {
      console.log('async courses');
      const value = await AsyncStorage.getItem(Config.COURSES_KEY);
      if (value !== null) {
        const data = JSON.parse(value);
        setCourses(data.courses);
      }
    } catch (e) {
      console.log('강의 불러오기 실패');
    }
  };

  useEffect(() => {
    if (
      isSaved.length !== 0 &&
      isSaved.length === courses.length &&
      flag === false
    ) {
      console.log('ㅇㅇㅇ');
      // setAllLectures(val =>
      //   val.sort((a, b) => {
      //     //console.log(a, b);

      //     if (a.end_date < b.end_date) {
      //       return 1;
      //     }
      //     if (a.end_date > b.end_date) {
      //       return -1;
      //     }
      //     return 0;
      //   }),
      // );
      dispatch(setUnpassLectures(allLectures));
      setFlag(true);
    }
  }, [isSaved]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.title}>급한거🔥</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {unPassLectures.length > 0 ? (
          unPassLectures.map((lectureData, idx) => (
            <CourseCard
              key={lectureData.lecture_name}
              lectureData={lectureData}
            />
          ))
        ) : (
          <View style={styles.emptyAttendanceContainer}>
            <Text style={styles.emptyAttendanceText}>수강 완료🚀</Text>
          </View>
        )}
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
