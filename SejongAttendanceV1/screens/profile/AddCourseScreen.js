import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  ScrollViewBase,
} from 'react-native';
import CourseAddSelect from '../../components/profile/CourseAddSelect';
import CourseAddView from '../../components/profile/CourseAddView';

const AddCourseScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#f2f2f6'}}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}>
      <StatusBar barStyle={'light-content'}></StatusBar>
      <View style={styles.container}>
        <CourseAddView
          header={'과목이름'}
          containerName={'과목명'}
          containerPlaceholder={'과목 이름'}
          footer={null}
        />
        <CourseAddView
          header={'학수번호'}
          containerName={'학수번호'}
          containerPlaceholder={'012345'}
          footer={'여섯자리 학수번호를 입력해주세요.'}
        />
        <CourseAddView
          header={'분반'}
          containerName={'분반'}
          containerPlaceholder={'012'}
          footer={'세자리 분반 번호를 입력해주세요.'}
        />
        <CourseAddSelect
          header={'단과대학'}
          collegeName={'선택하기...'}
          footer={
            '해당 과목의 주관 단과대학을 입력해주세요.\n예) 동양고전강독 - 대양휴머니티칼리지'
          }
        />
        <CourseAddSelect
          header={'학과'}
          collegeName={'선택하기...'}
          footer={
            '해당 과목의 주관 학과를 입력해주세요.\n예) C프로그래밍 - 컴퓨터공학과\n*대양휴머니티칼리지는 단과대학과 학과의 명칭이 동일합니다.'
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f6',
  },
});

export default AddCourseScreen;
