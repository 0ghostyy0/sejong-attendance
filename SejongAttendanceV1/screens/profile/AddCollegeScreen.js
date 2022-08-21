import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';

import {TableView, Section} from 'react-native-tableview-simple';
import CollegeTable from '../../components/profile/CollegeTable';
import {height, width, scale} from '../../config/globalStyles';

import collegesData from '../../data/colleges.json';

const AddCollegeScreen = ({navigation, route}) => {
  const [selectedCollege, setSelectedCollege] = useState(-1);
  const colleges = collegesData.colleges;

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
                selectedCollege={selectedCollege}
                setSelectedCollege={setSelectedCollege}
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

export default AddCollegeScreen;
