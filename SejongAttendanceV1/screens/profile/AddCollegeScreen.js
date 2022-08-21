import React, {useState, useEffect} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';
import {TableView, Section} from 'react-native-tableview-simple';
import CollegeTable from '../../components/profile/CollegeTable';
import {height, width, scale} from '../../config/globalStyles';
//Redux
import {connect} from 'react-redux';
import {setCourseCollege, setCourseCollegeName} from '../../redux/Actions';
//Data
import collegesData from '../../data/colleges.json';

const mapStateToProps = state => ({
  courseCollege: state.courseCollege,
  courseCollegeName: state.courseCollegeName,
});

const mapDispatchToProps = dispatch => ({
  setCourseCollege: college => dispatch(setCourseCollege(college)),
  setCourseCollegeName: collegeName =>
    dispatch(setCourseCollegeName(collegeName)),
});

const AddCollegeScreen = ({
  navigation,
  route,
  setCourseCollege,
  setCourseCollegeName,
}) => {
  const [selectedValue, setSelectedValue] = useState(-1);
  const [selectedCollegeName, setSelectedCollegeName] = useState('');
  const colleges = collegesData.colleges;
  useEffect(() => {
    setCourseCollege(selectedValue);
    setCourseCollegeName(selectedCollegeName);
  }, [
    setCourseCollegeName,
    selectedCollegeName,
    setCourseCollege,
    selectedValue,
  ]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.innerContainer}>
        <TableView style={styles.tableview}>
          <Section roundedCorners={true} hideSurroundingSeparators={true}>
            {colleges.map(college => (
              <CollegeTable
                key={college.id}
                id={college.id}
                college={college.college}
                selectedCollege={selectedValue}
                setSelectedCollege={setSelectedValue}
                setSelectedCollegeName={setSelectedCollegeName}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCollegeScreen);
