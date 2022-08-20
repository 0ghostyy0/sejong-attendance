import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';
import {scale} from '../../config/globalStyles';

import AddCourseScreen from '../../screens/profile/AddCourseScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import AddCollegeScreen from '../../screens/profile/AddCollegeScreen';
import AddDeptScreen from '../../screens/profile/AddDeptScreen';
import CreditScreen from '../../screens/profile/CreditScreen';

import CourseAddStorage from '../../components/profile/CourseAddStorage';

const Stack = createNativeStackNavigator();

const ProfileStackNavi = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="마이페이지"
        component={ProfileScreen}
        options={{
          headerLargeTitle: true,
          headerLargeTitleStyle: {fontSize: scale * 28},
          headerStyle: {backgroundColor: '#f2f2f6'},
          headerShadowVisible: false,
        }}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="addcourse"
          component={AddCourseScreen}
          options={{
            headerShown: true,
            headerTitle: '과목 추가',
            headerBackTitle: '출석 확인하기',
            headerStyle: {backgroundColor: '#f2f2f6'},
            headerShadowVisible: false,
            headerLeft: () => (
              <Button
                title="취소"
                onPress={() => {
                  navigation.navigate('마이페이지');
                }}
              />
            ),
            headerRight: () => (
              <Button
                title="추가"
                onPress={() => {
                  CourseAddStorage();
                  navigation.navigate('마이페이지');
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="addcollege"
          component={AddCollegeScreen}
          options={{
            headerShown: true,
            headerTitle: '단과대학',
            headerStyle: {backgroundColor: '#f2f2f6'},
            headerShadowVisible: false,
            headerBackTitleVisible: true,
            headerBackTitle: '출석 확인하기',
            headerRight: () => (
              <Button
                title="추가"
                onPress={() => {
                  navigation.navigate('addcourse');
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="adddept"
          component={AddDeptScreen}
          options={{
            headerShown: true,
            headerTitle: '학과',
            headerStyle: {backgroundColor: '#f2f2f6'},
            headerShadowVisible: false,
            headerRight: () => (
              <Button
                title="추가"
                onPress={() => {
                  navigation.navigate('addcourse');
                }}
              />
            ),
          }}
        />
      </Stack.Group>
      <Stack.Screen
        name="credit"
        component={CreditScreen}
        options={{
          headerLargeTitle: true,
          headerLargeTitleStyle: {fontSize: scale * 28},
          headerStyle: {backgroundColor: '#f2f2f6'},
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavi;
