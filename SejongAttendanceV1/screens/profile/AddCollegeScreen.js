import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import {TableView, Section} from 'react-native-tableview-simple';
import SelectTable from '../../components/profile/SelectTable';
import {height, width, scale} from '../../config/globalStyles';
//Redux
import {connect} from 'react-redux';
import {
  setCourseCollege,
  setCourseCollegeName,
  setCourseDept,
  setCourseDeptName,
} from '../../redux/Actions';
//Data
import collegesData from '../../data/colleges.json';

const mapStateToProps = state => ({
  courseCollege: state.courseCollege,
  courseCollegeName: state.courseCollegeName,
  courseDept: state.courseDept,
  courseDeptName: state.courseDeptName,
});

const mapDispatchToProps = dispatch => ({
  setCourseCollege: college => dispatch(setCourseCollege(college)),
  setCourseCollegeName: collegeName =>
    dispatch(setCourseCollegeName(collegeName)),
  setCourseDept: dept => dispatch(setCourseDept(dept)),
  setCourseDeptName: deptName => dispatch(setCourseDeptName(deptName)),
});

const AddCollegeScreen = ({
  courseCollege,
  setCourseCollege,
  setCourseCollegeName,
  setCourseDept,
  setCourseDeptName,
}) => {
  const colleges = collegesData.colleges;

  return (
    <View style={{backgroundColor: '#f2f2f6'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <View style={styles.innerContainer}>
          <TableView style={styles.tableview}>
            <Section roundedCorners={true} hideSurroundingSeparators={true}>
              {colleges.map(college => (
                <SelectTable
                  key={college.id}
                  id={college.id}
                  value={college.college}
                  selectedValue={courseCollege}
                  setSelectedValue={setCourseCollege}
                  setSelectedValueName={setCourseCollegeName}
                  selectType={'college'}
                  setSelectedDeptForCol={setCourseDept}
                  setCourseDeptNameForCol={setCourseDeptName}
                />
              ))}
            </Section>
          </TableView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f6',
    height: '100%',
    marginTop: height * 18,
    marginBottom: height * 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
  tableview: {
    width: width * 358,
    alignSelf: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCollegeScreen);
