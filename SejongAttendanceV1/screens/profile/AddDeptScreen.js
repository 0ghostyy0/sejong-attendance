import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';

import {TableView, Section} from 'react-native-tableview-simple';
import CollegeTable from '../../components/profile/CollegeTable';
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
  navigation,
  route,
  setCourseDept,
  setCourseDeptName,
  courseCollege,
}) => {
  const [selectedValue, setSelectedValue] = useState(-1);
  const [selectedDeptName, setSelectedDeptName] = useState('');
  const depts = collegesData.colleges[courseCollege].depts;
  useEffect(() => {
    setCourseDept(selectedValue);
    setCourseDeptName(selectedDeptName);
  }, [setCourseDeptName, setCourseDept, selectedValue, selectedDeptName]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <TableView style={styles.tableview}>
          <Section roundedCorners={true} hideSurroundingSeparators={true}>
            {depts.map(dept => (
              <CollegeTable
                key={dept.dept_id}
                id={dept.dept_id}
                college={dept.dept}
                selectedCollege={selectedValue}
                setSelectedCollege={setSelectedValue}
                setSelectedCollegeName={setSelectedDeptName}
              />
            ))}
          </Section>
        </TableView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f6',
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
