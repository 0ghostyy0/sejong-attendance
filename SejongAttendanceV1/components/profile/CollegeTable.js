import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Cell} from 'react-native-tableview-simple';
import {height, width, scale} from '../../config/globalStyles';

const CollegeTable = ({id, college, selectedCollege, setSelectedCollege}) => {
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
          }}
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
          }}
        />
      )}
    </View>
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
