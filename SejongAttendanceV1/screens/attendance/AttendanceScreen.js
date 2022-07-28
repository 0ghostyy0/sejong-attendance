import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
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
    marginTop: height * 12,
    marginBottom: height * 8,
  },
});

export default AttendanceScreen;
