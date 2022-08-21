import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Cell, Separator} from 'react-native-tableview-simple';
import {height, width, scale} from '../../config/globalStyles';

const CollegeTable = ({
  id,
  college,
  selectedCollege,
  setSelectedCollege,
  setSelectedCollegeId,
  setSelectedCollegeName,
}) => {
  return (
    <View>
      {selectedCollege === id ? (
        <Cell
          accessory="Checkmark"
          contentContainerStyle={styles.cell}
          cellStyle="Default"
          title={college}
          titleTextStyle={styles.titleText}
          onPress={() => {
            setSelectedCollege(id);
            setSelectedCollegeName(college);
            if (setSelectedCollegeId != null) {
              setSelectedCollegeId(id);
              setSelectedCollegeName(college);
            }
          }}
          ItemSeparatorComponent={({highlighted}) => (
            <Separator isHidden={highlighted} />
          )}
        />
      ) : (
        <Cell
          accessory="none"
          contentContainerStyle={styles.cell}
          cellStyle="Default"
          title={college}
          titleTextStyle={styles.titleText}
          onPress={() => {
            setSelectedCollege(id);
            setSelectedCollegeName(college);
            if (setSelectedCollegeId != null) {
              setSelectedCollegeId(id);
              setSelectedCollegeName(college);
            }
          }}
          ItemSeparatorComponent={() => <Separator />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    //marginVertical: height * 2,
    //height: height * 47,
  },
  titleText: {
    fontSize: scale * 17,
    fontWeight: 'normal',
  },
});

export default CollegeTable;
