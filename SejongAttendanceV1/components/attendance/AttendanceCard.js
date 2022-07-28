import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';

const AttendanceCard = () => {
  return (
    <View style={styles.component}>
      <TouchableOpacity style={styles.card}>
        <View style={styles.row1}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>미완료</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <Text style={styles.classNameText}>데이터베이스</Text>
          <Text style={styles.numOfAttendanceText}>1개</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    marginLeft: width * 16,
    marginRight: width * 16,
    marginBottom: height * 8,
  },
  card: {
    backgroundColor: 'white',
    height: height * 86,
    borderRadius: 10,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: '#FCE6DF',
    height: height * 23,
    width: width * 48,
    borderRadius: 8,
    marginTop: height * 10,
    marginLeft: width * 16,
  },
  badgeText: {
    color: '#EB5828',
    fontSize: scale * 12,
    fontWeight: '700',
    marginTop: height * 2,
    marginLeft: width * 8,
  },
  // classNumText: {
  //   opacity: 0.5,
  //   marginTop: height / 40,
  //   marginLeft: width / 30,
  //   fontSize: 13,
  // },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 17,
  },
  classNameText: {
    marginLeft: width * 16,
    fontSize: scale * 18,
    fontWeight: '700',
  },
  numOfAttendanceText: {
    marginRight: width * 16,
    fontSize: scale * 18,
    fontWeight: '700',
  },
});

export default AttendanceCard;
