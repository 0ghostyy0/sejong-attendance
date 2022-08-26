import React from 'react';
import {StyleSheet, View, Text, StatusBar, Linking} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import Jin from '../../assets/images/profile_jin.svg';
import Mi from '../../assets/images/profile_mi.svg';

const CreditScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.row1}>
        <Text style={styles.subtitle}>만든 사람들</Text>
      </View>
      <View style={styles.row2}>
        <View Style={styles.profileContainer}>
          <View style={{width: width * 120}}>
            <View style={styles.profileImg}>
              <Jin width={width * 60} height={height * 60} />
            </View>
          </View>
          <Text style={styles.profileTitle}>이진형 · CE 18</Text>
        </View>
        <View Style={styles.profileContainer}>
          <View style={styles.profileImg}>
            <Mi width={width * 70} height={height * 70} />
          </View>
          <Text style={styles.profileTitle}>김미성 · CE 18</Text>
        </View>
      </View>
      <View style={styles.row3}>
        <Text style={styles.explainTitle}>
          버그 제보나 관련 문의는 깃허브나 이메일
        </Text>
        <Text style={styles.explainTitle2}>
          attendanceghost@gmail.com으로 보내주세요!
        </Text>
        <Text
          style={styles.openInfo}
          onPress={() =>
            Linking.openURL('https://github.com/luciancah/sejong-attendance')
          }>
          Github 확인하기
        </Text>
      </View>
      <View style={styles.row3}>
        <Text style={styles.subtitle}>오픈소스</Text>
        <Text style={styles.openTitle}>
          iml1111 - 세종대학교 구성원 인증 라이브러리
        </Text>
        <Text
          style={styles.openInfo}
          onPress={() =>
            Linking.openURL(
              'https://github.com/iml1111/sejong-univ-auth#sejong-auth-api',
            )
          }>
          Github 확인하기
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f3f6',
    height: '100%',
  },
  row1: {
    flexDirection: 'row',
  },
  row2: {
    width: '100%',
    marginTop: height * 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  row3: {
    marginTop: height * 18,
    flexDirection: 'column',
  },
  subtitle: {
    marginLeft: width * 16,
    marginTop: height * 18,
    fontSize: scale * 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    justifyContent: 'center',
    width: width * 200,
    height: height * 100,
    backgroundColor: 'red',
  },
  profileImg: {
    backgroundColor: '#d9d9d9',
    width: scale * 80,
    height: scale * 80,
    borderRadius: scale * 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileTitle: {
    marginTop: height * 6,
    fontSize: scale * 12,
    fontWeight: 'bold',
    color: '#8a8a8d',
  },
  explainTitle: {
    marginLeft: width * 18,
    marginTop: height * 10,
    fontSize: scale * 12,
    fontWeight: 'bold',
    color: '#4C4C4C',
  },
  explainTitle2: {
    marginLeft: width * 18,
    fontSize: scale * 12,
    fontWeight: 'bold',
    color: '#4C4C4C',
  },
  openTitle: {
    marginLeft: width * 18,
    marginTop: height * 10,
    fontSize: scale * 14,
    fontWeight: 'bold',
    color: '#4C4C4C',
  },
  openInfo: {
    marginTop: height * 1,
    marginLeft: width * 18,
    color: '#8a8a8d',
    fontSize: scale * 12,
    fontWeight: 'bold',
  },
});

export default CreditScreen;
