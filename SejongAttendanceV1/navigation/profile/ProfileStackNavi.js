import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CommonActions} from '@react-navigation/native';
import {Button, Alert} from 'react-native';
import {scale} from '../../config/globalStyles';
import Config from 'react-native-config';
//Screens
import AddCourseScreen from '../../screens/profile/AddCourseScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import AddCollegeScreen from '../../screens/profile/AddCollegeScreen';
import AddDeptScreen from '../../screens/profile/AddDeptScreen';
import CreditScreen from '../../screens/profile/CreditScreen';
import HelpScreen from '../../screens/profile/HelpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Redux
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const ProfileStackNavi = ({navigation}) => {
  const courseName = useSelector(state => state.courseName);
  const courseNum = useSelector(state => state.courseNum);
  const courseClass = useSelector(state => state.courseClass);
  const courseDept = useSelector(state => state.courseDept);
  let checkCourseNumber = /^\d{6}$/;
  let checkClassNumber = /^\d{3}$/;
  let courseData = [];

  const pushCourseToStorage = (
    courseName,
    courseNum,
    courseClass,
    courseDept,
  ) => {
    let singleCourseData = `{"name": "${courseName}", "course_id": "${courseNum}", "class_id": "${courseClass}", "dept_id": "${courseDept}"}`;
    let jsonSingleData = JSON.parse(singleCourseData);
    courseData.push(jsonSingleData);
  };

  const courseAddStorage = async () => {
    try {
      pushCourseToStorage(courseName, courseNum, courseClass, courseDept);
      const oldValue = await AsyncStorage.getItem(Config.COURSES_KEY);
      let curValue;
      if (oldValue == null) {
        curValue = courseData;
      } else {
        curValue = JSON.parse(oldValue).courses;
        curValue.push(courseData[0]);
      }
      const courses = JSON.stringify({courses: curValue});
      await AsyncStorage.setItem(Config.COURSES_KEY, courses);
    } catch (error) {
      console.log('저장 실패');
      Alert.alert('저장 실패', '죄송합니다.\n다시 시도해주세요...죄송', [
        {
          text: '확인',
          onPress: () => navigation.navigate('landing'),
        },
      ]);
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="마이페이지"
        component={ProfileScreen}
        options={{
          headerLargeTitle: true,
          headerLargeTitleStyle: {fontSize: scale * 28},
          headerStyle: {backgroundColor: '#f4f3f6'},
          headerShadowVisible: false,
        }}
      />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="addcourse"
          component={AddCourseScreen}
          options={{
            headerShown: true,
            headerTitle: '강의 추가',
            headerBackTitle: '출석 확인하기',
            headerStyle: {backgroundColor: '#f4f3f6'},
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
                  if (
                    !courseNum.length ||
                    !courseName.length ||
                    !courseDept.length ||
                    !courseName.length
                  ) {
                    Alert.alert(
                      '강의 정보를 완성해주세요.',
                      `정보를 전부 입력해야\n 데이터를 받아올 수 있어요.`,
                      [
                        {
                          text: '확인',
                          onPress: () => {},
                        },
                      ],
                    );
                  } else if (
                    !checkCourseNumber.test(courseNum) ||
                    !checkClassNumber.test(courseClass)
                  ) {
                    Alert.alert(
                      '강의 정보가 잘못됐어요',
                      `학수번호 숫자 6자리,\n 분반 숫자 3자리인지 확인해주세요.`,
                      [
                        {
                          text: '확인',
                          onPress: () => {},
                        },
                      ],
                    );
                  } else {
                    courseAddStorage();
                    Alert.alert(
                      '강의 추가',
                      `${courseName}(${courseNum}-${courseClass})\강의를 추가했어요.👻`,
                      [
                        {
                          text: '오키',
                          onPress: () => navigation.navigate('마이페이지'),
                        },
                      ],
                    );
                    setTimeout(() => {
                      navigation.navigate('마이페이지');
                    }, 10);
                  }
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
            headerStyle: {backgroundColor: '#f4f3f6'},
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
            headerStyle: {backgroundColor: '#f4f3f6'},
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
        name="help"
        component={HelpScreen}
        options={{
          headerShown: true,
          headerLargeTitle: false,
          headerTitle: '',
          headerStyle: {backgroundColor: '#f4f3f6'},
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="credit"
        component={CreditScreen}
        options={{
          headerShown: true,
          headerLargeTitle: false,
          headerTitle: '',
          headerStyle: {backgroundColor: '#f4f3f6'},
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavi;
