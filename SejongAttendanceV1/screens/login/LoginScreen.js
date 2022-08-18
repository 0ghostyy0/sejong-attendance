import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import LoginText from '../../components/login/LoginText';
import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {height, width, scale} from '../../config/globalStyles';

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const login = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${Config.LOGIN_API_URL}`, {
        id: id,
        pw: pwd,
        method: `${Config.LOGIN_METHOD}`,
      });
      console.log(response.data);
      console.log(id);
      console.log(pwd);
      if (!response.data.result.success) {
        Alert.alert('서버 오류', '죄송합니다.\n잠시 후 다시 시도해주세요.', [
          {
            text: '확인',
            onPress: () => navigation.navigate('landing'),
          },
        ]);
      }
      if (response.data.result.is_auth) {
        console.log('true');
        storeStudentId();
        navigation.navigate('home');
      } else {
        console.log('false');
        Alert.alert('로그인 실패', '학번 또는 비밀번호를 확인해주세요.', [
          {
            text: '확인',
          },
        ]);
      }
    } catch (error) {
      Alert.alert('서버 오류', '죄송합니다.\n잠시 후 다시 시도해주세요.', [
        {
          text: '확인',
          onPress: () => navigation.navigate('landing'),
        },
      ]);
    } finally {
      setLoading(false);
      // navigation.navigate('home');
    }
  };

  const storeStudentId = () => {
    try {
      const value = JSON.stringify({id: id});
      AsyncStorage.setItem(Config.STUDENT_ID_KEY, value);
    } catch (error) {
      Alert.alert('내부 오류', '죄송합니다.\n로그인을 다시 시도해주세요.', [
        {
          text: '확인',
          onPress: () => navigation.navigate('login'),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>포탈 계정으로 로그인</Text>
      <LoginText
        header={'학번'}
        containerPlaceholder={'학번'}
        keyboardType={'number-pad'}
        textContentType={'username'}
        secureTextEntry={'false'}
        setValue={setId}
      />
      <LoginText
        header={'비밀번호'}
        containerPlaceholder={'비밀번호'}
        keyboardType={'default'}
        textContentType={'password'}
        secureTextEntry={'true'}
        setValue={setPwd}
      />
      <View style={styles.login}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            login();
          }}>
          <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
        <Text style={styles.loginInfo}>비밀번호를 잊으셨나요?</Text>
        <Text
          style={{
            ...styles.loginInfo,
            ...styles.loginLink,
          }}
          onPress={() =>
            Linking.openURL(
              'https://portal.sejong.ac.kr/jsp/login/loginSSL.jsp?rtUrl=sjpt.sejong.ac.kr/main/view/Login/doSsoLogin.do?p=',
            )
          }>
          포탈로 이동해서 계정 찾기
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f6',
  },
  title: {
    fontSize: scale * 28,
    fontWeight: 'bold',
    marginTop: height * 95,
    marginLeft: width * 16,
  },
  login: {
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#C30E2E',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 358,
    height: height * 48,
    borderRadius: 10,
    marginTop: height * 48,
    marginBottom: height * 14,
  },
  loginText: {
    color: 'white',
    fontSize: scale * 17,
    fontWeight: 'bold',
  },
  loginInfo: {
    color: '#979799',
    fontSize: scale * 12,
    alignItems: 'center',
  },
  loginLink: {
    textDecorationLine: 'underline',
    textDecorationColor: '#979799',
  },
});

export default LoginScreen;
