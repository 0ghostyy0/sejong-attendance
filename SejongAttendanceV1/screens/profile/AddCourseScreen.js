import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {
  setCourseCollege,
  setCourseCollegeName,
  setCourseDept,
  setCourseDeptName,
} from '../../redux/Actions';

import CourseAddSelect from '../../components/profile/CourseAddSelect';
import CourseAddView from '../../components/profile/CourseAddView';

const mapStateToProps = state => ({
  courseName: state.courseName,
  courseNum: state.courseNum,
  courseClass: state.courseClass,
});

const mapDispatchToProps = dispatch => ({
  setCourseCollege: college => dispatch(setCourseCollege(college)),
  setCourseCollegeName: collegeName =>
    dispatch(setCourseCollegeName(collegeName)),
  setCourseDept: dept => dispatch(setCourseDept(dept)),
  setCourseDeptName: deptName => dispatch(setCourseDeptName(deptName)),
});

const AddCourseScreen = ({
  navigation,
  setCourseCollege,
  setCourseCollegeName,
  setCourseDept,
  setCourseDeptName,
}) => {
  useEffect(() => {
    setCourseDept(-1);
    setCourseDeptName('선택하기...');
    setCourseCollege(-1);
    setCourseCollegeName('선택하기...');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      style={{backgroundColor: '#f2f2f6'}}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <CourseAddView
          header={'과목이름'}
          containerName={'과목명'}
          containerPlaceholder={'과목 이름'}
          footer={null}
          inputTextType={'name'}
        />
        <CourseAddView
          header={'학수번호'}
          containerName={'학수번호'}
          containerPlaceholder={'012345'}
          footer={'여섯자리 학수번호를 입력해주세요.'}
          inputTextType={'number'}
        />
        <CourseAddView
          header={'분반'}
          containerName={'분반'}
          containerPlaceholder={'001'}
          footer={'세자리 분반 번호를 입력해주세요.'}
          inputTextType={'class'}
        />
        <CourseAddSelect
          header={'단과대학'}
          footer={
            '해당 과목의 주관 단과대학을 입력해주세요.\n예) 동양고전강독 - 대양휴머니티칼리지'
          }
          navi={'addcollege'}
          navigation={navigation}
          selectType={'college'}
        />
        <CourseAddSelect
          header={'학과'}
          footer={
            '해당 과목의 주관 학과를 입력해주세요.\n예) C프로그래밍 - 컴퓨터공학과\n*대양휴머니티칼리지는 단과대학과 학과의 명칭이 동일합니다.'
          }
          navi={'adddept'}
          navigation={navigation}
          selectType={'dept'}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCourseScreen);
