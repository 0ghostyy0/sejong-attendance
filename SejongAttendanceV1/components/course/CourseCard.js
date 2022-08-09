import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';

const AttendanceCard = ({navigation}) => {
  return (
    <View style={styles.component}>
      <View style={styles.card}>
        <View flexDirection="row" style={styles.row1}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>미완료</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <Text style={styles.courseSubTitle}>1주차 · 28분 21초</Text>
        </View>
        <View style={styles.row3}>
          <View style={styles.courseNameContainer}>
            <Text
              style={styles.classNameText}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              [기계학습][1주차]과목소개 소개소개
            </Text>
          </View>
          <View style={styles.coursePercentContainer}>
            <Text style={styles.numOfAtendanceCaption}>27</Text>
            <Text style={styles.numOfAttendanceText}>%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    marginLeft: width * 16,
    marginRight: width * 16,
    marginBottom: height * 8,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {height: 2},
  },
  card: {
    backgroundColor: 'white',
    height: height * 92,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {height: 2},
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#EB5828',
    fontSize: scale * 12,
    fontWeight: 'bold',
  },
  row2: {
    flexDirection: 'row',
  },
  courseSubTitle: {
    marginLeft: width * 16,
    marginTop: height * 8,
    fontSize: scale * 12,
    fontWeight: 'bold',
    color: '#8a8a8d',
  },
  courseNameContainer: {
    width: width * 220,
  },
  coursePercentContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 16,
  },
  classNameText: {
    marginLeft: width * 16,
    fontSize: scale * 16,
    fontWeight: 'bold',
  },
  numOfAttendanceText: {
    marginRight: width * 16,
    color: '#8a8a8d',
    fontSize: scale * 14,
    fontWeight: 'bold',
  },
  numOfAtendanceCaption: {
    marginRight: width * 2,
    marginTop: height * 3,
    alignItems: 'baseline',
    fontSize: scale * 18,
    fontWeight: 'bold',
  },
});

export default AttendanceCard;
