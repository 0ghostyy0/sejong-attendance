import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import AttendanceCard from '../../components/attendance/AttendanceCard';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const AttendanceScreen = () => {
  const [thisWeek, setThisWeek] = useState(0);
  const today = new Date();
  console.log(today);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>출석 확인하기</Text>
      <Text style={styles.week}>2주차, 9월 14일</Text>

      <SegmentedControl
        style={styles.SegmentedControl}
        values={['수강 가능', '전체 주차']}
        selectedIndex={thisWeek}
        onChange={event => {
          setThisWeek(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <ScrollView>
        <AttendanceCard />
        <AttendanceCard />
      </ScrollView>
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
    marginTop: height * 8,
  },
  SegmentedControl: {
    marginHorizontal: width * 16,
    marginTop: height * 8,
    marginBottom: height * 12,
  },
});

export default AttendanceScreen;
