import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';

const CourseAddView = ({
  header,
  containerName,
  containerPlaceholder,
  footer,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.boxContainer}>
        <Text style={styles.courseName}>{containerName}</Text>
        <TextInput
          style={styles.courseInput}
          autoCapitalize={'false'}
          autoComplete={'false'}
          placeholder={containerPlaceholder}></TextInput>
      </View>
      {console.log(footer)}
      {footer === null ? null : <Text style={styles.footer}>{footer}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 358,
    alignSelf: 'center',
    // backgroundColor: '#000',
  },
  header: {
    fontSize: scale * 12,
    color: '#86858c',
    marginTop: height * 18,
    marginLeft: width * 16,
  },
  boxContainer: {
    width: width * 358,
    height: height * 44,
    borderRadius: 14,
    backgroundColor: '#fff',
    marginTop: height * 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseName: {
    marginLeft: width * 16,
    fontSize: scale * 17,
  },
  courseInput: {
    marginLeft: width * 10,
    fontSize: scale * 17,
  },
  footer: {
    fontSize: scale * 12,
    color: '#86858c',
    width: width * 358,
    marginTop: height * 6,
    marginLeft: width * 10,
  },
});
export default CourseAddView;