import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Profile from '../../components/profile/Profile';
import {height, width, scale} from '../../config/globalStyles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>마이페이지</Text>
      <Profile />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.subtitle}>과목 설정</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('addcourse');
          }}>
          <Ionicons name="add-circle-outline" style={styles.addIcon} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.addCourseText}>
          오른쪽 위의 + 버튼을 눌러 과목을 추가해주세요.
        </Text>
      </View>
      <Text style={styles.subtitle}>문의하기</Text>
      <View style={styles.margin1}>
        <TouchableOpacity style={{...styles.btn, flexDirection: 'row'}}>
          <Text style={styles.text}>만든 솨람</Text>
          <Ionicons name={'ios-chevron-forward'} style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.margin2}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{...styles.text, color: '#eb5828'}}>계정 삭제하기</Text>
        </TouchableOpacity>
        <Text style={styles.deleteText}>
          기기에 있는 사용자의 데이터는 서버에 저장되지 않으며 계정 삭제 시
          등록한 정보가 모두 초기화됩니다.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f6',
  },
  title: {
    fontSize: scale * 28,
    fontWeight: 'bold',
    marginTop: height * 95,
    marginBottom: height * 12,
    marginLeft: width * 16,
  },
  subtitle: {
    marginLeft: width * 16,
    marginTop: height * 18,
    fontSize: scale * 20,
    fontWeight: 'bold',
  },
  addIcon: {
    fontSize: scale * 20,
    color: '#007aff',
    marginLeft: width * 252,
    marginTop: height * 21,
  },
  addCourseText: {
    fontSize: scale * 14,
    fontWeight: 'bold',
    color: '#979799',
    marginLeft: width * 63,
    marginTop: height * 30,
    marginBottom: height * 14,
  },
  margin1: {
    marginTop: height * 12,
  },
  margin2: {
    marginTop: height * 44,
  },
  btn: {
    backgroundColor: '#ffffff',
    marginHorizontal: width * 16,
    height: height * 44,
    borderRadius: 14,
  },
  text: {
    fontSize: scale * 17,
    marginVertical: height * 11,
    marginLeft: width * 16,
  },
  chevronIcon: {
    color: '#c4c4c6',
    fontSize: scale * 16,
    marginTop: height * 13,
    marginLeft: width * 250,
  },
  deleteText: {
    marginLeft: width * 25,
    marginRight: width * 34,
    marginTop: height * 8,
    fontSize: scale * 10,
    color: '#86858c',
  },
});

export default ProfileScreen;
