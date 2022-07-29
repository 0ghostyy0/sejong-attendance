import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnalysisScreen from '../screens/analysis/AnalysisScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AttendanceStackNavi from './attendance/AttendanceStackNavi';

import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import AnalysisIcon from '../assets/images/mdi_sign-caution.svg';

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
          tabBarIcon: ({size, color}) => (
            <Ionicons name={'lead-pencil'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="analysis"
        component={AnalysisScreen}
        options={{
          title: '통계',
          tabBarIcon: ({focused, size, color}) => {
            color = focused ? '#007aff' : '#979799';
            return (
              <AnalysisIcon width={30} height={30} style={{color: color}} />
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: '마이페이지',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name={'ghost'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavi;
