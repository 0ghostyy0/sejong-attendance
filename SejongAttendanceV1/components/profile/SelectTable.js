import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Cell} from 'react-native-tableview-simple';
import {scale} from '../../config/globalStyles';

const SelectTable = ({
  id,
  value,
  selectedValue,
  setSelectedValue,
  setSelectedValueName,
  selectType,
  setSelectedDeptForCol,
  setCourseDeptNameForCol,
}) => {
  return (
    <View style={styles.container}>
      {selectedValue === id ? (
        <Cell
          accessory="Checkmark"
          contentContainerStyle={styles.cell}
          cellStyle="Default"
          title={value}
          titleTextStyle={styles.titleText}
          onPress={() => {
            setSelectedValue(id);
            setSelectedValueName(value);
          }}
        />
      ) : (
        <Cell
          accessory="none"
          contentContainerStyle={styles.cell}
          cellStyle="Default"
          title={value}
          titleTextStyle={styles.titleText}
          onPress={() => {
            if (selectType === 'college') {
              if (selectedValue !== id) {
                setSelectedDeptForCol(-1);
                setCourseDeptNameForCol('');
              }
            }
            setSelectedValue(id);
            setSelectedValueName(value);
          }}
          //ItemSeparatorComponent={() => <Separator />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f3f6',
  },
  cell: {
    //marginVertical: height * 2,
    //height: height * 47,
  },
  titleText: {
    fontSize: scale * 17,
    fontWeight: 'normal',
  },
});

export default SelectTable;
