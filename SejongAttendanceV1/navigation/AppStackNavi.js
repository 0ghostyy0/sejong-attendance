import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStackNavi from './login/LoginStackNavi';
import BottomTabNavi from './BottomTabNavi';

const Stack = createNativeStackNavigator();

const AppStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login_stack"
        component={LoginStackNavi}
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

export default AppStackNavi;
