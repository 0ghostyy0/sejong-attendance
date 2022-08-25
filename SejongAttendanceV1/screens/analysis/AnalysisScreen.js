// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   StatusBar,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import {height, width, scale} from '../../config/globalStyles';
// import CourseCard from '../../components/course/CourseCard';

// const AnalysisScreen = ({route}) => {
//   // let lectures = route.params.names[3];

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={'dark-content'} />
//       <Text style={styles.title}>급한거🔥</Text>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* {lectures.length > 0 ? (
//           lectures.map((lectureData, idx) => {
//             return <CourseCard key={idx} lectureData={lectureData} />;
//           }) */}
//         {/* ) : ( */}
//         <View style={styles.emptyAttendanceContainer}>
//           <Text style={styles.emptyAttendanceText}>수강 완료🚀</Text>
//         </View>
//         {/* )} */}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     backgroundColor: '#f4f3f6',
//   },
//   title: {
//     fontSize: scale * 28,
//     fontWeight: 'bold',
//     marginTop: height * 95,
//     marginLeft: width * 16,
//   },
//   week: {
//     fontSize: scale * 18,
//     fontWeight: 'bold',
//     marginLeft: width * 18,
//     marginTop: height * 8,
//   },
//   emptyAttendanceContainer: {
//     marginTop: height * 190,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emptyAttendanceText: {
//     fontSize: scale * 16,
//     fontWeight: 'bold',
//     color: '#979799',
//   },
//   goToProfileButtonText: {
//     fontSize: scale * 14,
//     fontWeight: 'bold',
//     color: '#007AFF',
//   },
// });
// export default AnalysisScreen;

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import CourseCard from '../../components/course/CourseCard';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import parseXlsxData from '../../utils/parseXlsxData';
import {useSelector, useDispatch} from 'react-redux';
import {setUnpassLectures} from '../../redux/Actions';

const AnalysisScreen = () => {
  const isFocused = useIsFocused();
  const [courses, setCourses] = useState([]);
  const [allLectures, setAllLectures] = useState([]);
  const [isSaved, setIsSaved] = useState([]);
  const [isParse, setIsParse] = useState(0);
  const unPassLectures = useSelector(state => state.unPassLectures);
  const dispatch = useDispatch();

  useEffect(() => {
    getAsyncCourses();
  }, [isFocused, setAllLectures]);

  useEffect(() => {
    // setAllLectures([]);
    // console.log('isSaved');
    // console.log(isSaved);
    for (let i in courses) {
      parseXlsxData(
        courses[i].dept_id,
        courses[i].course_id,
        courses[i].class_id,
        '18011531',
      )
        .then(data => {
          console.log('then');
          console.log(courses[i].course_id);
          console.log(data);
          if (
            isSaved.findIndex(val => val === `${courses[i].course_id}`) === -1
          ) {
            setAllLectures([...allLectures, ...data]);
            for (let i in allLectures) {
              console.log(allLectures[i]);
              if (allLectures[i].lecture_status === 2) {
                console.log('a');
                dispatch(setUnpassLectures(allLectures));
              }
            }
            setIsSaved([...isSaved, `${courses[i].course_id}`]);

            console.log('추가됨');
            console.log(isSaved);
          }
          setIsParse(data => data + 1);
        })

        //setAllLectures(val => [...val, ...data]);
        .catch(error => {
          console.log('error');
          console.log(error);
          setIsParse(data => data + 1);
        });
    }
    console.log('all');
    console.log(allLectures);
  }, [courses, setIsParse, setAllLectures, isSaved, setIsSaved]);

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

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {console.log(unPassLectures)}
        {allLectures.length > 0 ? (
          allLectures.map((lectureData, idx) => {
            return <CourseCard key={idx} lectureData={lectureData} />;
          })
        ) : (
          <View style={styles.emptyAttendanceContainer}>
            <Text style={styles.emptyAttendanceText}>
              강의를 모두 수강했어요👍
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f6',
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
});
export default AnalysisScreen;
