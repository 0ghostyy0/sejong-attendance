import React from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import CourseCard from '../../components/course/CourseCard';

const CourseScreen = ({route}) => {
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
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
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
