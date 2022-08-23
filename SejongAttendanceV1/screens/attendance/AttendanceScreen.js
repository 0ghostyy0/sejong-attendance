import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import AttendanceCard from '../../components/attendance/AttendanceCard';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const AttendanceScreen = ({navigation}) => {
  const [thisWeek, setThisWeek] = useState(0);
  const [isCourse, setIsCourse] = useState(false);
  const time = new Date();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  let week_array = new Array('일', '월', '화', '수', '목', '금', '토');
  let today_num = time.getDay();
  const [courses, setCourses] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    getAsyncCourses();
  }, [isFocused]);

  const getAsyncCourses = async () => {
    try {
      const value = await AsyncStorage.getItem(Config.COURSES_KEY);
      if (value !== null) {
        const data = JSON.parse(value);
        setCourses(data.courses);
      } else {
      }
    } catch (e) {
      console.log('과목 불러오기 실패');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>출석 확인하기</Text>
      <Text style={styles.week}>
        2주차, {month}월 {date}일 {week_array[today_num]}요일
      </Text>
      <SegmentedControl
        style={styles.SegmentedControl}
        values={['수강 가능', '전체 주차']}
        selectedIndex={thisWeek}
        onChange={event => {
          setThisWeek(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      {!thisWeek ? (
        courses.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {courses.map((course, idx) => (
              <AttendanceCard
                key={idx}
                course={course.name}
                courseId={course.course_id}
                classId={course.class_id}
                deptId={course.dept_id}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyAttendanceContainer}>
            <Text style={styles.emptyAttendanceText}>
              추가된 강의가 없어요.
            </Text>
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
        )
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
    backgroundColor: '#f2f2f6',
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
    color: '#79B6FB',
  },
});

export default AttendanceScreen;
