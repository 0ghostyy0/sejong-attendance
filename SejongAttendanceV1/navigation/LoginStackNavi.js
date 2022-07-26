import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/LoginScreen';
import BottomTabNavi from './BottomTabNavi';

const Stack = createNativeStackNavigator();

const LoginStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={BottomTabNavi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavi;
