import React, {useState} from 'react';
import {StyleSheet, View, StatusBar, ScrollView} from 'react-native';

import {TableView, Section} from 'react-native-tableview-simple';
import CollegeTable from '../../components/profile/CollegeTable';
import {height, width, scale} from '../../config/globalStyles';

import collegesData from '../../data/colleges.json';

const AddCollegeScreen = ({navigation, route}) => {
  const [selectedDept, setSelectedDept] = useState(-1);
  const depts = collegesData.colleges[route.params.name[1]].depts;

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
                selectedCollege={selectedDept}
                setSelectedCollege={setSelectedDept}
                selected={route.params.name[0]}
                setSelectedCollegeId={route.params.name[2]}
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
