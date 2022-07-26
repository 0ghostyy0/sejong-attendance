import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {height, width} from '../../config/globalStyles';
import AttendanceCard from '../../components/attendance/AttendanceCard';

const AttendanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>출석 확인하기</Text>
      <Text style={styles.week}>2주차, 9월 14일</Text>
      <AttendanceCard />
      <AttendanceCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: height / 10,
    marginLeft: width / 20,
  },
  week: {
    marginLeft: width / 20,
    marginTop: height / 100,
    marginBottom: height / 100,
  },
});

export default AttendanceScreen;
