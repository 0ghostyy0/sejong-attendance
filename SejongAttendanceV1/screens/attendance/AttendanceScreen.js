import React from 'react';
import {View, Text} from 'react-native';
import AttendanceCard from '../../components/attendance/AttendanceCard';

const AttendanceScreen = () => {
  return (
    <View>
      <Text>Attendance screen</Text>
      <AttendanceCard />
    </View>
  );
};

export default AttendanceScreen;
