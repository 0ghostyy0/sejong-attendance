import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnalysisScreen from '../screens/analysis/AnalysisScreen';
import AttendanceStackNavi from './attendance/AttendanceStackNavi';
import ProfileStackNavi from './profile/ProfileStackNavi';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AnalysisIcon from '../assets/images/mdi_sign-caution.svg';
import {scale, height} from '../config/globalStyles';

const Tab = createBottomTabNavigator();

const BottomTabNavi = () => {
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={() => ({
        tabBarActiveTintColor: '#352214',
        tabBarInactiveTintColor: '#979799',
        tabBarStyle: {
          height: height * 85,
          alignContent: 'center',
          paddingBottom: height * 25,
        },
      })}>
      <Tab.Screen
        name="attendance"
        component={AttendanceStackNavi}
        options={{
          title: '출석확인',
          headerShown: false,
          tabBarIcon: ({name, focused, size, color}) => {
            name = focused ? 'pencil' : 'pencil-outline';
            color = focused ? '#352214' : '#979799';
            return (
              <MaterialCommunityIcons name={name} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="analysis"
        component={AnalysisScreen}
        options={{
          headerShown: false,
          title: '급한거',
          tabBarIcon: ({name, focused, size, color}) => {
            name = focused ? 'flash' : 'flash-outline';
            color = focused ? '#352214' : '#979799';
            return <Ionicons name={name} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStackNavi}
        options={{
          title: '마이페이지',
          headerShown: false,
          tabBarLabelStyle: ({focused, color}) => {
            color = focused ? '#352214' : '#979799';
          },
          tabBarIcon: ({name, focused, size, color}) => {
            name = focused ? 'ghost' : 'ghost-outline';
            color = focused ? '#352214' : '#979799';
            return (
              <MaterialCommunityIcons name={name} size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavi;
