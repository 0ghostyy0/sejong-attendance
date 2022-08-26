import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStackNavi from './login/LoginStackNavi';
import BottomTabNavi from './BottomTabNavi';

import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const getStudentId = async () => {
  try {
    return await AsyncStorage.getItem(Config.STUDENT_ID_KEY);
  } catch (e) {
    console.log(e.message);
  }
};

const AppStackNavi = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getStudentId().then(value => {
      if (value != null) {
        setIsLogin(true);
      }
    });
  }, []);

  return (
    <Stack.Navigator>
      {isLogin ? null : (
        <Stack.Screen
          name="login_stack"
          component={LoginStackNavi}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="home"
        component={BottomTabNavi}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavi;
