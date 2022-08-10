import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import LandingLogo from '../../assets/images/landing_logo.svg';
import LogoText from '../../assets/images/logo_text.svg';
import SejongLogo from '../../assets/images/sejong_logo.png';
import {height, width, scale} from '../../config/globalStyles';

const LandingScreen = ({navigation}) => {
  return (
    <View styles={styles.container}>
      <View style={styles.logo}>
        <LandingLogo
          style={styles.landing_logo}
          width={width * 120}
          height={height * 113.8}
        />
        <LogoText
          style={styles.logo_text}
          width={width * 94}
          height={height * 30}
        />
      </View>
      <View style={styles.login}>
        <Text style={styles.login_info}>
          3초만에 로그인하고 출석 걱정은 끝🚀
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('login');
          }}>
          <Image style={styles.sejong_logo} source={SejongLogo} />
          <Text style={styles.btn_text}>세종대학교 구성원 인증하기</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.caution}>
            출석귀신은 서버를 통하지 않고 운영돼요.
          </Text>
          <Text style={styles.caution}>
            내 출석기록은 아무도 확인할 수 없으니 걱정마세요!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f6',
  },
  logo: {
    alignItems: 'center',
  },
  landing_logo: {
    marginTop: height * 245,
  },
  logo_text: {
    marginTop: height * 4.2,
  },
  login: {
    alignItems: 'center',
    marginBottom: height * 70,
  },
  login_info: {
    fontSize: scale * 16,
    fontWeight: 'bold',
    marginTop: height * 257,
  },
  sejong_logo: {
    width: width * 20,
    height: height * 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c30e2e',
    width: width * 358,
    height: height * 48,
    borderRadius: 10,
    marginVertical: height * 10,
  },
  btn_text: {
    color: '#ffffff',
    fontSize: scale * 17,
    fontWeight: 'bold',
    marginLeft: width * 5,
  },
  caution: {
    color: '#979799',
    fontSize: scale * 12,
    fontWeight: '500',
  },
});

export default LandingScreen;
