import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  RefreshControl,
  Platform,
} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
//Functions
import weekNumberCounter from '../../utils/weekNumberCounter';
//Components
import AttendanceCard from '../../components/attendance/AttendanceCard';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
//Redux
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setCourseList, setStudentId, setCourseData} from '../../redux/Actions';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const AttendanceScreen = ({navigation}) => {
  const time = new Date();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  let week_array = ['일', '월', '화', '수', '목', '금', '토'];
  let today_num = time.getDay();
  let weekNumber = weekNumberCounter();

  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState(false);
  const [thisWeek, setThisWeek] = useState(0);
  const [id, setId] = useState(''); // redux 들어가는 학번
  const [asyncCourses, setAsyncCourses] = useState([]); // redux 들어가는 강의목록
  const [courses, setCourses] = useState([]); //server 들어가는 강의목록
  const [axiosCount, setAxiosCount] = useState(0);
  const courseData = useSelector(state => state.courseData);
  const courseList = useSelector(state => state.courseList);

  const [refreshCount, setRefreshCount] = useState(0);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefreshCount(value => value + 1);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getAsyncStudentId();
    getAsyncCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  useEffect(() => {
    if (asyncCourses && id) {
      setCourses([]);
      setAxiosCount(0);
      for (let i in asyncCourses) {
        setCourses(data => [
          ...data,
          {
            student_id: id,
            dept_id: asyncCourses[i].dept_id,
            course_name: asyncCourses[i].name,
            course_id: asyncCourses[i].course_id,
            class_id: asyncCourses[i].class_id,
          },
        ]);
        setAxiosCount(value => value + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncCourses, id, refreshCount]);

  useEffect(() => {
    if (
      courses.length === asyncCourses.length &&
      axiosCount === asyncCourses.length &&
      axiosCount !== 0
    ) {
      getCoursesData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axiosCount, refreshCount]);

  const getAsyncCourses = async () => {
    try {
      const value = await AsyncStorage.getItem(Config.COURSES_KEY);
      if (value !== null) {
        const data = JSON.parse(value);
        setAsyncCourses(data.courses);
        dispatch(setCourseList(data.courses));
      }
    } catch (e) {
      console.log('강의 불러오기 실패');
    }
  };

  const getAsyncStudentId = async () => {
    try {
      const value = await AsyncStorage.getItem(Config.STUDENT_ID_KEY);
      if (value !== null) {
        const data = JSON.parse(value);
        setId(data.id);
        dispatch(setStudentId(data.id));
      }
    } catch (e) {
      console.log('학번 불러오기 실패');
    }
  };

  const getCoursesData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${Config.COURSE_API_URL}`, {
        courses: courses,
      });
      console.log(response.data);
      if (!response.data) {
        Alert.alert('블랙보드 서버 오류', '잠시 후 다시 시도해주세요.', [
          {
            text: '확인',
            onPress: () => navigation.navigate('courses'),
          },
        ]);
      }
      if (response.data) {
        dispatch(setCourseData(response.data));
      }
    } catch (e) {
      console.log(e);
      Alert.alert('블랙보드 서버 오류', '잠시 후 다시 시도해주세요.', [
        {
          text: '확인',
          onPress: () => navigation.navigate('courses'),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.title}>출석 확인하기</Text>
      <Text style={styles.week}>
        {weekNumber}주차, {month}월 {date}일 {week_array[today_num]}
        요일
      </Text>
      <SegmentedControl
        style={styles.SegmentedControl}
        appearance="light"
        values={['수강 가능', '전체 주차']}
        selectedIndex={thisWeek}
        onChange={event => {
          setThisWeek(event.nativeEvent.selectedSegmentIndex);
        }}
      />

      {courseData.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {courseData.map((course, idx) => {
            return (
              <AttendanceCard
                key={idx}
                course={course.course_name}
                courseId={course.course_id}
                classId={course.class_id}
                lectures={course.lectures}
                unpassCount={course.unpass_count}
                thisWeek={thisWeek}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      ) : (
        <View style={styles.emptyAttendanceContainer}>
          <Text style={styles.emptyAttendanceText}>추가된 강의가 없어요.</Text>
          <Text style={styles.emptyAttendanceText}>
            마이페이지에서 강의를 추가해주세요.😥
          </Text>
          <TouchableOpacity
            style={{marginTop: height * 14}}
            onPress={() => {
              navigation.navigate('profile');
            }}>
            <Text style={styles.goToProfileButtonText}>이동하기...</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f6',
  },
  title: {
    fontSize: scale * 28,
    fontWeight: 'bold',
    marginLeft: width * 16,
    ...Platform.select({
      ios: {
        marginTop: height * 95,
      },
      android: {
        marginTop: height * 36,
      },
    }),
  },
  week: {
    fontSize: scale * 18,
    fontWeight: 'bold',
    marginLeft: width * 18,
    marginTop: height * 8,
  },
  SegmentedControl: {
    marginHorizontal: width * 16,
    marginTop: height * 8,
    marginBottom: height * 12,
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

export default AttendanceScreen;
