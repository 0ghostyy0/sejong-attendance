import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import {connect} from 'react-redux';
import {setCourseName, setCourseNum, setCourseClass} from '../../redux/Actions';

const mapStateToProps = state => ({
  courseName: state.courseName,
  courseNum: state.courseNum,
  courseClass: state.courseClass,
  courseCollege: state.courseCollege,
  courseDept: state.courseDept,
});
//not needed, only for in case of rendering Course itself.

const mapDispatchToProps = dispatch => ({
  setCourseName: name => dispatch(setCourseName(name)),
  setCourseNum: number => dispatch(setCourseNum(number)),
  setCourseClass: classnum => dispatch(setCourseClass(classnum)),
});

const CourseAddView = ({
  header,
  containerName,
  containerPlaceholder,
  footer,
  inputTextType,
  setCourseName,
  setCourseNum,
  setCourseClass,
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputTextType === 'name') {
      setCourseName(inputValue);
    } else if (inputTextType === 'number') {
      setCourseNum(inputValue);
    } else {
      setCourseClass(inputValue);
    }
  }, [setCourseName, setCourseNum, setCourseClass, inputTextType, inputValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.boxContainer}>
        <Text style={styles.courseName}>{containerName}</Text>
        <TextInput
          style={styles.courseInput}
          autoCapitalize="none"
          autoComplete={'false'}
          placeholder={containerPlaceholder}
          onChangeText={inputValue => {
            setInputValue(inputValue);
          }}
        />
      </View>
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
    width: width * 250,
  },
  footer: {
    fontSize: scale * 12,
    color: '#86858c',
    width: width * 358,
    marginTop: height * 6,
    marginLeft: width * 10,
  },
});
export default connect(null, mapDispatchToProps)(CourseAddView);
