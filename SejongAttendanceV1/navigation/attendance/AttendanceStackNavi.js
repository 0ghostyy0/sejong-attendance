import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AttendanceScreen from '../../screens/attendance/AttendanceScreen';
import CourseScreen from '../../screens/course/CourseScreen';

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
      <Stack.Screen
        name="single"
        component={CourseScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default AttendanceStackNavi;
