import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {height, width} from '../../config/globalStyles';

const AttendanceCard = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.row1}>
        <Text style={styles.classNumText}>9090921-001</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>미완료</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <Text style={styles.classNameText}>데이터베이스</Text>
        <Text style={styles.numOfAttendanceText}>1/6</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: height / 8,
    marginLeft: width / 20,
    marginRight: width / 20,
    borderWidth: 1.5,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#E5E5E7',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    backgroundColor: '#FFEDEC',
    height: height / 40,
    width: width / 8,
    borderRadius: 8,
    marginTop: height / 40,
    marginRight: width / 30,
  },
  badgeText: {
    color: '#E38387',
    fontSize: 11,
    marginTop: height / 160,
    marginLeft: width / 40,
  },
  classNumText: {
    opacity: 0.5,
    marginTop: height / 40,
    marginLeft: width / 30,
    fontSize: 13,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height / 110,
  },
  classNameText: {
    marginLeft: width / 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  numOfAttendanceText: {
    marginRight: width / 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AttendanceCard;
