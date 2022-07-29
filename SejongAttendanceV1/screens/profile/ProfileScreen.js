import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Profile from '../../components/profile/Profile';
import {height, width, scale} from '../../config/globalStyles';

const ProfileScreen = () => {
  return (
    <View>
      <Text style={styles.title}>마이페이지</Text>
      <Profile />
      <View>
        <Text style={styles.subtitle}>과목 설정</Text>
      </View>
      <Text style={styles.subtitle}>문의하기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ProfileScreen;
