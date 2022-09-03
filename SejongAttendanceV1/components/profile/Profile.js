import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Freshman from '../../assets/images/freshman.svg';
import Sophomore from '../../assets/images/sophomore.svg';
import Junior from '../../assets/images/junior.svg';
import Senior from '../../assets/images/senior.svg';
import {height, width, scale} from '../../config/globalStyles';

import {useSelector} from 'react-redux';

const Profile = () => {
  const studentId = useSelector(state => state.studentId);
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDay();
  let semester = '';

  if (month >= 3 && month <= 6) {
    if (month === 6) {
      if (day <= 22) {
        semester = '1';
      } else {
        semester = '여름';
      }
    } else {
      semester = '1';
    }
  } else if (month >= 7 && month < 9) {
    semester = '여름';
  } else if (month >= 9 && month <= 12) {
    if (month === 12) {
      if (day <= 22) {
        semester = '2';
      } else {
        semester = '겨울';
      }
    } else {
      semester = '2';
    }
  } else if (month >= 1 && month < 3) {
    semester = '겨울';
  }

  return (
    <View style={styles.component}>
      <View style={styles.row}>
        <View style={styles.profileImg}>
          {studentId.substring(0, 2) === String(year).substring(2, 4) ? (
            <Freshman width={width * 40} height={height * 40} />
          ) : studentId.substring(0, 2) === String(year - 1).substring(2, 4) ? (
            <Sophomore width={width * 40} height={height * 40} />
          ) : studentId.substring(0, 2) === String(year - 2).substring(2, 4) ? (
            <Junior width={width * 40} height={height * 40} />
          ) : (
            <Senior width={width * 40} height={height * 40} />
          )}
        </View>
        <View style={styles.studentInfoContainer}>
          <Text style={styles.studentID}>{studentId}</Text>
          <Text style={styles.semester}>{`${year}학년도 ${semester}학기`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    marginHorizontal: width * 16,
    height: height * 77,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {height: 2},
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    backgroundColor: '#d9d9d9',
    width: scale * 60,
    height: scale * 60,
    borderRadius: scale * 50,
    marginLeft: width * 16,
    marginRight: width * 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  studentInfoContainer: {
    justifyContent: 'center',
  },
  studentID: {
    fontSize: scale * 22,
  },
  semester: {
    fontSize: scale * 13,
  },
});

export default Profile;
