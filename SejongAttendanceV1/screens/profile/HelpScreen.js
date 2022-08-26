import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {height, width, scale} from '../../config/globalStyles';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.row1}>
        <Text style={styles.subtitle}>모든 강의를 지원하나요?</Text>
      </View>
      <View style={styles.row3}>
        <Text style={styles.explainTitle}>
          세종대학교 자체 온라인 강의가 아닌 세종사이버대학, K-MOOC,
        </Text>
        <Text style={styles.explainTitle2}>SELC 강의는 지원하지 않습니다.</Text>
      </View>
      <View style={styles.row1}>
        <Text style={styles.subtitle}>출석 데이터가 안떠요.</Text>
      </View>
      <View style={styles.row3}>
        <Text style={styles.explainTitle}>
          개설학과와 단과대학을 정확히 확인하셨나요?
        </Text>
        <Text style={styles.explainTitle2}>
          강의 등록시 기입하는 학과와 단과대학은은 본인의 학과가 아닌
        </Text>
        <Text style={styles.explainTitle2}>강의를 개설한 대학입니다.</Text>
      </View>
      <View style={styles.row1}>
        <Text style={styles.subtitle}>
          강의 정보를 정확히 확인했는데 안돼요.
        </Text>
      </View>
      <View style={styles.row3}>
        <Text style={styles.explainTitle}>
          블랙보드의 온라인출석탭에서 출석 정보가 바로 뜨지 않고 링크로
        </Text>
        <Text style={styles.explainTitle2}>
          연결되는 강의는 분반에 001을 넣어보세요.
        </Text>
        <Text style={styles.explainTitle2}>ex)고급프로그래밍활용</Text>
      </View>
      <View style={styles.row1}>
        <Text style={styles.subtitle}>
          수강 가능과 전체 주차의 차이는 무엇인가요?
        </Text>
      </View>
      <View style={styles.row3}>
        <Text style={styles.explainTitle}>
          수강 가능탭은 지금 시점에 수강 가능한 강의 중 미수강 개수를
          보여줍니다.
        </Text>
        <Text style={styles.explainTitle2}>
          전체 주차는 이번 학기 전체 미수강 개수를 보여줍니다.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f3f6',
    height: '100%',
  },
  row1: {
    flexDirection: 'row',
  },
  row3: {
    marginTop: height * 10,
    flexDirection: 'column',
    marginBottom: height * 10,
  },
  subtitle: {
    marginLeft: width * 16,
    marginTop: height * 18,
    fontSize: scale * 18,
    fontWeight: 'bold',
  },
  explainTitle: {
    marginLeft: width * 18,
    fontSize: scale * 12,
    fontWeight: 'bold',
    color: '#4C4C4C',
  },
  explainTitle2: {
    marginLeft: width * 18,
    fontSize: scale * 12,
    fontWeight: 'bold',
    color: '#4C4C4C',
  },
});

export default HelpScreen;
