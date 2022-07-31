import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AttendanceCard = ({navigation}) => {
  return (
    <View style={styles.component}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('single');
        }}
        style={styles.card}>
        <View flexDirection="row" style={styles.row1}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>미완료</Text>
          </View>
          <Ionicons name={'ios-chevron-forward'} style={styles.chevronIcon} />
        </View>

        <View style={styles.row2}>
          <Text style={styles.classNameText}>데이터베이스</Text>
          <Text style={styles.numOfAtendanceCaption}>미수강</Text>
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
    marginTop: height * 12,
    marginLeft: width * 16,
  },
  badgeText: {
    color: '#EB5828',
    fontSize: scale * 12,
    fontWeight: '700',
    marginTop: height * 5,
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
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 16,
  },
  classNameText: {
    marginLeft: width * 16,
    fontSize: scale * 18,
    fontWeight: 'bold',
  },
  numOfAttendanceText: {
    marginLeft: width * 2,
    // marginRight: width * 16,
    fontSize: scale * 18,
    fontWeight: 'bold',
  },
  numOfAtendanceCaption: {
    marginLeft: width * 168,
    marginRight: width * 2,
    marginTop: height * 3,
    alignItems: 'baseline',
    color: '#8a8a8d',
    fontWeight: 'bold',
  },
  chevronIcon: {
    marginTop: height * 14,
    marginRight: width * 14,
    fontSize: scale * 16,
    color: '#c4c4c6',
  },
});

export default AttendanceCard;
