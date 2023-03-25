import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';

import {TableView, Section} from 'react-native-tableview-simple';
import SelectTable from '../../components/profile/SelectTable';
import {height, width} from '../../config/globalStyles';
//Redux
import {connect} from 'react-redux';
import {setCourseDept, setCourseDeptName} from '../../redux/Actions';
//Data
import collegesData from '../../data/colleges.json';

const mapStateToProps = state => ({
  courseDept: state.courseDept,
  courseDeptName: state.courseDeptName,
  courseCollege: state.courseCollege,
});

const mapDispatchToProps = dispatch => ({
  setCourseDept: dept => dispatch(setCourseDept(dept)),
  setCourseDeptName: deptName => dispatch(setCourseDeptName(deptName)),
});

const AddDeptScreen = ({
  courseCollege,
  courseDept,
  setCourseDept,
  setCourseDeptName,
}) => {
  const depts = collegesData.colleges[courseCollege].depts;

  return (
    <View style={{backgroundColor: '#f4f3f6'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View>
          <TableView style={styles.tableview} appearance={'light'}>
            <Section roundedCorners={true} hideSurroundingSeparators={true}>
              {depts.map(dept => (
                <SelectTable
                  key={dept.dept_id}
                  id={dept.dept_id}
                  value={dept.dept}
                  selectedValue={courseDept}
                  setSelectedValue={setCourseDept}
                  setSelectedValueName={setCourseDeptName}
                  selectType={'dept'}
                  setSelectedDeptForCol={null}
                  setCourseDeptNameForCol={null}
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
    backgroundColor: '#f4f3f6',
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

export default connect(mapStateToProps, mapDispatchToProps)(AddDeptScreen);
