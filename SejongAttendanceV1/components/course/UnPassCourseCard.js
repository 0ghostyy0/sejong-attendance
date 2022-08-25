import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import parseXlsxData from '../../utils/parseXlsxData';
import {setUnpassLectures} from '../../redux/Actions';
import {useSelector, useDispatch} from 'react-redux';

const UnPassCourseCard = ({
  courses,
  course,
  deptId,
  courseId,
  classId,
  studentId,
  // unPassLectures,
  // setUnPassLectures,
  isSaved,
  setIsSaved,
  flag,
  setFlag,
  isParse,
  setIsParse,
}) => {
  //const [lectureData, setLectureData] = useState([]);
  //const [isParse, setIsParse] = useState(0);
  const dispatch = useDispatch();
  const unPassLectures = useSelector(state => state.unPassLectures);

  // useEffect(() => {
  //   parseXlsxData(deptId, courseId, classId, studentId)
  //     .then(data => {
  //       console.log(courseId);
  //       console.log(data);
  //       setLectureData(val => [...val, ...data]);
  //     })
  //     .catch(error => {
  //       console.log('error');
  //       console.log(error);
  //       setIsParse(data => data + 1);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [setLectureData, isParse]);

  useEffect(() => {
    parseXlsxData(deptId, courseId, classId, studentId)
      .then(data => {
        //console.log(data);
        if (
          isSaved.findIndex(val => val === `${courseId}`) === -1 &&
          flag === false
        ) {
          //setAllLectures([...allLectures, ...data]);
          for (let j in data) {
            if (data[j].lecture_status === 2) {
              console.log('실행');
              //console.log(data[j]);
              //setAllLectures(val => [...val, data[j]]);
              dispatch(setUnpassLectures(data[j]));
              console.log('실행안됨');
              //setAllLectures(val => [data[j]]);
              //console.log(allLectures);
            }
          }
          setIsSaved(val => [...val, `${courseId}`]);
          if (isSaved.length === courses.length) {
            setFlag(true);
          }
        } else {
          console.log('똑같은거');
          console.log(courseId);
        }
        //setIsParse(val => val + 1);
      })
      .catch(error => {
        setIsParse(data => data + 1);
      });
    console.log('all');
    // console.log(allLectures);
    // console.log(isSaved.length);
    console.log(isSaved);
    // console.log(courses.length);
  }, [flag]);
  //, isSaved, setIsSaved

  //return unPassLectures.start_date !== undefined ? (
  return unPassLectures.lengh > 0 ? (
    <View>
      {unPassLectures.map((lecture, idx) => {
        <View style={styles.component}>
          <View style={styles.card}>
            <View flexDirection="row" style={styles.row1}>
              {lecture.lecture_status === 2 ? (
                <View style={styles.badgePass}>
                  <Text style={styles.badgeTextPass}>완료</Text>
                </View>
              ) : lecture.lecture_status === 1 ? (
                <View style={styles.badgeNotyet}>
                  <Text style={styles.badgeTextNotyet}>기간아님</Text>
                </View>
              ) : (
                <View style={styles.badgeUnpass}>
                  <Text style={styles.badgeTextUnpass}>미완료</Text>
                </View>
              )}
            </View>
            <View style={styles.row2}>
              <Text
                style={styles.courseSubTitle}
                numberOfLines={1}
                ellipsizeMode={'tail'}>
                {lecture.start_date.substr(0, 2) ===
                lecture.end_date.substr(0, 2)
                  ? Number(lecture.start_date.substr(0, 2)) +
                    '월' +
                    Number(lecture.start_date.substr(2, 2)) +
                    '일-' +
                    Number(lecture.end_date.substr(2, 2)) +
                    '일'
                  : Number(lecture.start_date.substr(0, 2)) +
                    '월 ' +
                    Number(lecture.start_date.substr(2, 2)) +
                    '일-' +
                    Number(lecture.end_date.substr(0, 2)) +
                    '월 ' +
                    Number(lecture.end_date.substr(2, 2)) +
                    '일'}
                {' | ' + lecture.location}
              </Text>
            </View>
            <View style={styles.row3}>
              <View style={styles.courseNameContainer}>
                <Text
                  style={styles.classNameText}
                  numberOfLines={1}
                  ellipsizeMode={'tail'}>
                  {lecture.lecture_name}
                </Text>
              </View>
              <View style={styles.coursePercentContainer}>
                <Text style={styles.numOfAtendanceCaption}>
                  {lecture.progress}
                </Text>
                <Text style={styles.numOfAttendanceText}>%</Text>
              </View>
            </View>
          </View>
        </View>;
      })}
    </View>
  ) : (
    //  <View style={styles.component}>
    //     <View style={styles.card}>
    //       <View flexDirection="row" style={styles.row1}>
    //         {unPassLectures.lecture_status === 2 ? (
    //           <View style={styles.badgePass}>
    //             <Text style={styles.badgeTextPass}>완료</Text>
    //           </View>
    //         ) : unPassLectures.lecture_status === 1 ? (
    //           <View style={styles.badgeNotyet}>
    //             <Text style={styles.badgeTextNotyet}>기간아님</Text>
    //           </View>
    //         ) : (
    //           <View style={styles.badgeUnpass}>
    //             <Text style={styles.badgeTextUnpass}>미완료</Text>
    //           </View>
    //         )}
    //       </View>
    //       <View style={styles.row2}>
    //         <Text
    //           style={styles.courseSubTitle}
    //           numberOfLines={1}
    //           ellipsizeMode={'tail'}>
    //           {unPassLectures.start_date.substr(0, 2) ===
    //           unPassLectures.end_date.substr(0, 2)
    //             ? Number(unPassLectures.start_date.substr(0, 2)) +
    //               '월' +
    //               Number(unPassLectures.start_date.substr(2, 2)) +
    //               '일-' +
    //               Number(unPassLectures.end_date.substr(2, 2)) +
    //               '일'
    //             : Number(unPassLectures.start_date.substr(0, 2)) +
    //               '월 ' +
    //               Number(unPassLectures.start_date.substr(2, 2)) +
    //               '일-' +
    //               Number(unPassLectures.end_date.substr(0, 2)) +
    //               '월 ' +
    //               Number(unPassLectures.end_date.substr(2, 2)) +
    //               '일'}
    //           {' | ' + unPassLectures.location}
    //         </Text>
    //       </View>
    //       <View style={styles.row3}>
    //         <View style={styles.courseNameContainer}>
    //           <Text
    //             style={styles.classNameText}
    //             numberOfLines={1}
    //             ellipsizeMode={'tail'}>
    //             {unPassLectures.lecture_name}
    //           </Text>
    //         </View>
    //         <View style={styles.coursePercentContainer}>
    //           <Text style={styles.numOfAtendanceCaption}>
    //             {unPassLectures.progress}
    //           </Text>
    //           <Text style={styles.numOfAttendanceText}>%</Text>
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    <View>
      <Text>앨스</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    marginLeft: width * 16,
    marginRight: width * 16,
    marginBottom: height * 8,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {height: 2},
  },
  card: {
    backgroundColor: 'white',
    height: height * 92,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {height: 2},
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgeUnpass: {
    backgroundColor: '#FCE6DF',
    height: height * 23,
    width: width * 48,
    borderRadius: 8,
    marginTop: height * 10,
    marginLeft: width * 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTextUnpass: {
    color: '#EB5828',
    fontSize: scale * 12,
    fontWeight: 'bold',
  },
  badgePass: {
    backgroundColor: '#BFDEFF',
    height: height * 23,
    width: width * 37,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 12,
    marginLeft: width * 16,
  },
  badgeTextPass: {
    color: '#007AFF',
    fontSize: scale * 12,
    fontWeight: '700',
  },
  badgeNotyet: {
    backgroundColor: '#D2D2D2',
    height: height * 23,
    width: width * 58,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 12,
    marginLeft: width * 16,
  },
  badgeTextNotyet: {
    color: '#4C4C4C',
    fontSize: scale * 12,
    fontWeight: '700',
  },
  row2: {
    flexDirection: 'row',
  },
  courseSubTitle: {
    marginLeft: width * 16,
    marginTop: height * 8,
    fontSize: scale * 12,
    width: width * 240,
    fontWeight: 'bold',
    color: '#8a8a8d',
  },
  courseNameContainer: {
    width: width * 260,
  },
  coursePercentContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 16,
  },
  classNameText: {
    marginLeft: width * 16,
    fontSize: scale * 16,
    fontWeight: 'bold',
  },
  numOfAttendanceText: {
    marginRight: width * 16,
    color: '#8a8a8d',
    fontSize: scale * 14,
    fontWeight: 'bold',
  },
  numOfAtendanceCaption: {
    marginRight: width * 2,
    marginTop: height * 3,
    alignItems: 'baseline',
    fontSize: scale * 18,
    fontWeight: 'bold',
  },
});

export default UnPassCourseCard;
