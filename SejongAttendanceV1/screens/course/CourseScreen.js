import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';
import CourseCard from '../../components/course/CourseCard';

const CourseScreen = ({navigation, route}) => {
  let lectures = route.params.names[3];

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Text style={styles.title}>{route.params.names[0]}</Text>
        <Text
          style={
            styles.semiTitle
          }>{`${route.params.names[1]}-${route.params.names[2]}`}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {lectures.length > 0 ? (
          lectures.map((lectureData, idx) => {
            return <CourseCard key={idx} lectureData={lectureData} />;
          })
        ) : (
          <View style={styles.emptyAttendanceContainer}>
            <Text style={styles.emptyAttendanceText}>
              강의 정보를 불러올 수 없어요.
            </Text>
            <Text style={styles.emptyAttendanceText}>
              강의 정보가 잘못됐거나,
            </Text>
            <Text style={styles.emptyAttendanceText}>
              아직 온라인 강의가 없는 강의일 수 있어요.😥
            </Text>
            <TouchableOpacity
              style={{marginTop: height * 14}}
              onPress={() => {
                navigation.navigate('profile');
              }}>
              <Text style={styles.goToProfileButtonText}>
                마이페이지에서 확인하기...
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f6',
  },
  title: {
    fontSize: scale * 24,
    fontWeight: 'bold',
    marginTop: height * 6,
    marginLeft: width * 16,
  },
  semiTitle: {
    fontSize: scale * 14,
    fontWeight: 'bold',
    marginTop: height * 2,
    marginLeft: width * 16,
    marginBottom: height * 12,
    color: '#979799',
  },
  emptyAttendanceContainer: {
    marginTop: height * 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyAttendanceText: {
    fontSize: scale * 16,
    fontWeight: 'bold',
    color: '#979799',
  },
  goToProfileButtonText: {
    fontSize: scale * 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default CourseScreen;
