import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import CourseCard from '../../components/course/CourseCard';
//Redux
import {useSelector} from 'react-redux';

const AnalysisScreen = () => {
  const courseList = useSelector(state => state.courseList);
  const courseData = useSelector(state => state.courseData);
  const [unpassLectures, setUnpassLectures] = useState([]);
  const [sortedLectures, setSortedLectures] = useState([]);

  useEffect(() => {
    if (courseData.length > 0) {
      sortLectures();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseData, courseList]);

  const sortLectures = () => {
    let result = [];
    setUnpassLectures([]);
    for (let i in courseData) {
      let lectures = courseData[i].lectures;
      // console.log(lectures[0]);
      if (lectures.length > 0) {
        for (let j in lectures) {
          if (lectures[j].status === 3) {
            setUnpassLectures(data => [...data, lectures[j]]);
          }
        }
      }
    }
    if (unpassLectures.length > 0) {
      result = unpassLectures.sort((a, b) => {
        if (a.end_date < b.end_date) {
          return -1;
        }
        if (a.end_date > b.end_date) {
          return 1;
        }
        return 0;
      });
      setSortedLectures(result);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.title}>급한거🔥</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {sortedLectures.length > 0 ? (
          sortedLectures.map((lecture, idx) => {
            return <CourseCard key={idx} lectureData={lecture} />;
          })
        ) : (
          <View style={styles.emptyAttendanceContainer}>
            <Text style={styles.emptyAttendanceText}>모두 완료했어요 :)</Text>
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
    ...Platform.select({
      ios: {
        marginTop: height * 95,
      },
      android: {
        marginTop: height * 36,
      },
    }),
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
