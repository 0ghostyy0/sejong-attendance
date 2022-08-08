import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddCourseScreen from '../../screens/profile/AddCourseScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import {Button} from 'react-native';
import {scale} from '../../config/globalStyles';

const Stack = createNativeStackNavigator();

const ProfileStackNavi = () => {
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
      <Stack.Group>
        <Stack.Screen
          name="addcourse"
          component={AddCourseScreen}
          options={{
            headerShown: true,
            headerTitle: '과목 추가',
            headerBackTitle: '출석 확인하기',
            headerStyle: {backgroundColor: '#f2f2f6'},
            headerShadowVisible: false,
            headerLeft: () => <Button title="취소" />,
            headerRight: () => <Button title="추가" />,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStackNavi;
