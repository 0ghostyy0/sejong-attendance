import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddCourseScreen from '../../screens/profile/AddCourseScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import AddCollegeScreen from '../../screens/profile/AddCollegeScreen';
import {Button} from 'react-native';
import {scale} from '../../config/globalStyles';
import AddDeptScreen from '../../screens/profile/AddDeptScreen';

const Stack = createNativeStackNavigator();

const ProfileStackNavi = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{presentation: 'modal'}}>
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
          headerRight: () => <Button title="추가" />,
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
    </Stack.Navigator>
  );
};

export default ProfileStackNavi;
