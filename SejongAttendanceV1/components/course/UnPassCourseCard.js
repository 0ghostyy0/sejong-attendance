import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import parseXlsxData from '../../utils/parseXlsxData';
import CourseCard from './CourseCard';
import {height, scale} from '../../config/globalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {setIsChecked} from '../../redux/Actions';

const UnPassCourseCard = ({
  deptId,
  courseId,
  classId,
  studentId,
  refreshing,
}) => {
  const [lectureData, setLectureData] = useState([]);
  const [isParse, setIsParse] = useState(0);
  const [flag, setFlag] = useState(false);
  const courseList = useSelector(state => state.courseList);
  const dispatch = useDispatch();
  const mounted = useRef(false);

  useEffect(() => {
    setFlag(false);
  }, [courseList]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (flag === true) {
        dispatch(setIsChecked(1));
      }
    }
  }, [flag]);

  useEffect(() => {
    parseXlsxData(deptId, courseId, classId, studentId, setIsParse)
      .then(data => {
        console.log(data);
        setLectureData([...data]);
        console.log(lectureData);
      })
      .catch(error => {
        console.log(error);
        setIsParse(data => data + 1);
      });
    console.log(lectureData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setLectureData, isParse, refreshing, courseList]);

  return (
    <View>
      {lectureData !== undefined ? (
        lectureData.map((lecture, idx) => {
          if (lecture.lecture_status === 3) {
            if (!flag) {
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
