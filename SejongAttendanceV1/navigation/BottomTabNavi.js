import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnalysisScreen from '../screens/analysis/AnalysisScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AttendanceStackNavi from './attendance/AttendanceStackNavi';

const Tab = createBottomTabNavigator();

const BottomTabNavi = () => {
  return (
    <Tab.Navigator backBehavior="none">
      <Tab.Screen
        name="attendance"
        component={AttendanceStackNavi}
        options={{
          title: '출석확인',
          headerShown: false,
          // tabBarIcon: () => (),
        }}
      />
      <Tab.Screen
        name="analysis"
        component={AnalysisScreen}
        options={{
          title: '통계',
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: '마이페이지',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavi;
