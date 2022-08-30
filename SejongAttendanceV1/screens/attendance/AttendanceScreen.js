import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import AttendanceCard from '../../components/attendance/AttendanceCard';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import weekNumberCounter from '../../utils/weekNumberCounter';
import {useDispatch} from 'react-redux';
import {setCourseList, setStudentId} from '../../redux/Actions';

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

  const isFocused = useIsFocused();
  const [thisWeek, setThisWeek] = useState(0);
  const [id, setId] = useState('');
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  const [refreshCount, setRefreshCount] = useState(0);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefreshCount(value => value + 1);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getAsyncStudendtId();
    getAsyncCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  const getAsyncCourses = async () => {
    try {
      const value = await AsyncStorage.getItem(Config.COURSES_KEY);
      if (value !== null) {
        const data = JSON.parse(value);
        setCourses(data.courses);
        dispatch(setCourseList(data.courses));
      }
    } catch (e) {
      console.log('강의 불러오기 실패');
    }
  };

  const getAsyncStudendtId = async () => {
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
        values={['수강 가능', '전체 주차']}
        selectedIndex={thisWeek}
        onChange={event => {
          setThisWeek(event.nativeEvent.selectedSegmentIndex);
        }}
      />

      {courses.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {courses.map((course, idx) => {
            return (
              <AttendanceCard
                key={idx}
                course={course.name}
                deptId={course.dept_id}
                courseId={course.course_id}
                classId={course.class_id}
                studentId={id}
                thisWeek={thisWeek}
                navigation={navigation}
                refreshing={refreshCount}
                isFocused={isFocused}
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
    marginTop: height * 95,
    marginLeft: width * 16,
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
