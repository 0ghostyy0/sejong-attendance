import React from 'react';
import {StyleSheet, ActionSheetIOS} from 'react-native';
// import {Cell} from 'react-native-tableview-simple';
import {Section, Cell} from 'react-native-js-table';
import {height, width, scale} from '../../config/globalStyles';

const CollegeTable = ({college}) => {
  return (
    <Section
      contentContainerStyle={styles.cell}
      cellStyle="Default"
      accessory="None"
      title={college}
      titleTextStyle={styles.titleText}
      onPress={() => {
        <Cell accessory="Checkmark" />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  cell: {
    marginVertical: height * 2,
  },
  titleText: {
    fontSize: scale * 17,
    fontWeight: 'normal',
  },
});

export default CollegeTable;
