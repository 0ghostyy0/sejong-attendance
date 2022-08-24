import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import CourseCard from '../../components/course/CourseCard';

const CourseScreen = ({route}) => {
  let lectures = route.params.names[3];

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Text style={styles.title}>{route.params.names[0]}</Text>
        <Text
          style={
            styles.semiTitle
          }>{`${route.params.names[1]}-${route.params.names[2]}`}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {lectures.length > 0 ? (
          lectures.map((lectureData, idx) => {
            return <CourseCard key={idx} lectureData={lectureData} />;
          })
        ) : (
          <Text>강의 데이터 없음</Text>
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
  title: {
    fontSize: scale * 24,
    fontWeight: 'bold',
    marginTop: height * 6,
    marginLeft: width * 16,
  },
  semiTitle: {
    fontSize: scale * 14,
    fontWeight: 'bold',
    marginTop: height * 2,
    marginLeft: width * 16,
    marginBottom: height * 12,
    color: '#979799',
  },
});

export default CourseScreen;
