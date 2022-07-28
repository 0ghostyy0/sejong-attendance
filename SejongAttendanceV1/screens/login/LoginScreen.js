import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {height, width} from '../../config/globalStyles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
        // source={require('')}
        // style={{width: , height: }}
        />
        <Text>Login screen</Text>
      </View>
      <TextInput style={styles.textInput} placeholder={'학번'} />
      <TextInput style={styles.textInput} placeholder={'비밀번호'} />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate('home');
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
