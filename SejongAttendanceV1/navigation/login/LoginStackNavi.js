import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../../screens/login/LandingScreen';
import LoginScreen from '../../screens/login/LoginScreen';

const Stack = createNativeStackNavigator();

const LoginStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: '#f2f2f6'},
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginStackNavi;
