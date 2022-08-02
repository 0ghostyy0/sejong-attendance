import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import CourseCard from '../../components/course/CourseCard';

const CourseScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>데이터베이스</Text>
        <Text style={styles.semiTitle}>009959-001</Text>
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
