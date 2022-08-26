import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import UnPassCourseCard from '../../components/course/UnPassCourseCard';
import {useSelector} from 'react-redux';

const AnalysisScreen = () => {
  const studentId = useSelector(state => state.studentId);
  const courseList = useSelector(state => state.courseList);
  const [isThere, setIsThere] = useState(false);
  const [flag, setFlag] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.title}>급한거🔥</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {courseList.length > 0 ? (
          courseList.map((course, idx) => {
            return (
              <UnPassCourseCard
                key={idx}
                deptId={course.dept_id}
                courseId={course.course_id}
                classId={course.class_id}
                studentId={studentId}
                isThere={isThere}
                setIsThere={setIsThere}
              />
            );
          })
        ) : (
          <View style={styles.emptyAttendanceContainer}>
            {!flag ? setFlag(true) : null}
            <Text style={styles.emptyAttendanceText}>과목을 추가해주세요.</Text>
          </View>
        )}
        {!isThere && !flag ? (
          <View style={styles.emptyAttendanceContainer}>
            <Text style={styles.emptyAttendanceText}>모두 완료했어요 :)</Text>
          </View>
        ) : null}
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
    marginTop: height * 210,
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
