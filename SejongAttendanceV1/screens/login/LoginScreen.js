import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TurboModuleRegistry,
} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {height, width} from '../../config/globalStyles';

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
      if (response.data.result.is_auth) {
        console.log('true');
        storeStudentId();
        navigation.navigate('home');
      } else {
        console.log('false');
      }
    } catch (error) {
    } finally {
      setLoading(false);
      navigation.navigate('home');
    }
  };

  const storeStudentId = async () => {
    try {
      const value = JSON.stringify({id: id});
      await AsyncStorage.setItem(Config.STUDENT_ID_KEY, value);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
        // source={require('')}
        // style={{width: , height: }}
        />
        <Text>Login screen</Text>
      </View>
      <TextInput
        style={styles.textInput}
        value={id}
        placeholder={'학번'}
        keyboardType={'number-pad'}
        autoCapitalize="none"
        autoComplete="none"
        textContentType="username"
        onChangeText={id => {
          setId(id);
        }}
      />
      <TextInput
        style={styles.textInput}
        value={pwd}
        placeholder={'비밀번호'}
        keyboardType={'default'}
        autoCapitalize="none"
        autoComplete="none"
        textContentType="password"
        secureTextEntry={true}
        onChangeText={pwd => {
          setPwd(pwd);
        }}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          login();
        }}>
        <Text style={styles.loginText}>세종대학교 구성원 인증하기</Text>
      </TouchableOpacity>
      <View style={styles.loginInfo}>
        <Text style={{marginTop: height / 100}}>
          저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함저장안함
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
  logo: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 0.065,
    marginLeft: width * 19,
    marginRight: width * 19,
    marginBottom: height / 150,
    paddingLeft: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginBtn: {
    flex: 0.06,
    backgroundColor: '#C30E2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 19,
    marginRight: width * 19,
    marginTop: height / 150,
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginInfo: {
    flex: 0.35,
    alignItems: 'center',
    marginLeft: width * 19,
    marginRight: width * 19,
  },
});

export default LoginScreen;
