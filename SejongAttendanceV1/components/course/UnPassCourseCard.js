import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import parseXlsxData from '../../utils/parseXlsxData';
import CourseCard from './CourseCard';
import {height, scale} from '../../config/globalStyles';

const UnPassCourseCard = ({
  deptId,
  courseId,
  classId,
  studentId,
  setIsThere,
}) => {
  const [lectureData, setLectureData] = useState([]);
  const [isParse, setIsParse] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log('unpasscoursecard');
    parseXlsxData(deptId, courseId, classId, studentId)
      .then(data => {
        console.log(data);
        setLectureData([...data]);
        console.log(lectureData);
      })
      .catch(error => {
        console.log('error');
        console.log(error);
        setIsParse(data => data + 1);
      });
    console.log('lecture');
    console.log(lectureData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setLectureData, isParse]);

  return (
    <View>
      {lectureData !== undefined ? (
        lectureData.map((lecture, idx) => {
          if (lecture.lecture_status === 3) {
            if (!flag) {
              setIsThere(true);
              setFlag(true);
            }
            return <CourseCard key={idx} lectureData={lecture} />;
          }
        })
      ) : (
        <View style={styles.emptyAttendanceContainer}>
          <Text style={styles.emptyAttendanceText}>과목 로딩중…</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default UnPassCourseCard;
