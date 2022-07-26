import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AttendanceScreen from '../../screens/attendance/AttendanceScreen';

const Stack = createNativeStackNavigator();

const AttendanceStackNavi = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="courses"
        component={AttendanceScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AttendanceStackNavi;
