import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Section, TableView} from 'react-native-tableview-simple';
import {height, width, scale} from '../../config/globalStyles';

import CourseTable from './CourseTable';

const MapCourseTable = ({navigation, courses}) => {
  const [delCourse, setDelCourse] = useState(0);
  return (
    <View style={styles.shadow}>
      {courses.length > 0 ? (
        <TableView style={styles.tableview}>
          <Section roundedCorners={true} hideSurroundingSeparators={true}>
            {courses.map((course, idx) => (
              <CourseTable
                key={idx}
                course_idx={idx}
                course={course.name}
                course_num={`${course.course_id}-${course.class_id}`}
                courses={courses}
                navigation={navigation}
                setDelCourse={setDelCourse}
              />
            ))}
          </Section>
        </TableView>
      ) : (
        <Text style={styles.addCourseText}>
          오른쪽 위의 + 버튼을 눌러 과목을 추가해주세요.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tableview: {
    marginHorizontal: width * 16,
  },
  addIcon: {
    fontSize: scale * 20,
    color: '#007aff',
    marginRight: width * 26,
    marginTop: height * 21,
  },
  addCourseText: {
    fontSize: scale * 14,
    fontWeight: 'bold',
    color: '#979799',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 60,
    marginTop: height * 30,
    marginBottom: height * 14,
  },
});

export default MapCourseTable;
