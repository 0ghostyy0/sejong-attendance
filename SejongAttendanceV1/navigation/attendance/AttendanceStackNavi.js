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
        options={{
          headerShown: true,
          // headerTransparent: true,
          headerTitle: '',
          headerBackTitle: '출석 확인하기',
          headerStyle: {backgroundColor: '#f4f3f6'},
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AttendanceStackNavi;
