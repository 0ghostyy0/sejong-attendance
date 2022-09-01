import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import React, {useState} from 'react';

export const getCurrentDate = () => {
  let time = new Date();
  let month, date, hour, min;
  time.getMonth() + 1 < 10
    ? (month = '0' + String(time.getMonth() + 1))
    : String(time.getMonth() + 1);
  time.getDate() < 10
    ? (date = '0' + String(time.getDate()))
    : (date = String(time.getDate()));
  time.getHours() < 10
    ? (hour = '0' + String(time.getHours()))
    : (hour = String(time.getHours()));
  time.getMinutes() < 10
    ? (min = '0' + String(time.getMinutes()))
    : (min = String(time.getMinutes()));

  return month + date + hour + min;
};

const parseLectureName = lectureName => {
  let fullDate = lectureName.slice(-35, lectureName.length);
  let startDate =
    fullDate.substr(5, 2) +
    fullDate.substr(8, 2) +
    fullDate.substr(11, 2) +
    fullDate.substr(14, 2);
  let endDate =
    fullDate.substr(24, 2) +
    fullDate.substr(27, 2) +
    fullDate.substr(30, 2) +
    fullDate.substr(33, 2);
  let onlyLectureName = lectureName.substr(6, lectureName.length - 44);
  return [startDate, endDate, onlyLectureName];
};

const parseLectureStatus = (startDate, endDate, currentDate, isPass) => {
  // 상태 1 : 아직 기간 안됨
  // 상태 2 : 들음
  // 상태 3 : 지금 수강기간, 안들음
  // 상태 4 : 수강기간 지남, 안들음
  if (currentDate < startDate) {
    return 1;
  } else if (isPass === 'P') {
    return 2;
  } else if (currentDate <= endDate && isPass === 'F') {
    return 3;
  } else {
    return 4;
  }
};
const readXlsxData = srcXlsFile => {
  return new Promise((resolve, reject) => {
    const xlsRawObjects = XLSX.read(srcXlsFile, {
      type: 'string',
    });
    if (!xlsRawObjects) reject();
    else resolve(xlsRawObjects);
  });
};
const parseXlsxData = async (
  deptId,
  courseId,
  classId,
  studentId,
  setIsParse,
) => {
  let srcXlsFile, xlsRawObjects;
  let lectureData = [];
  let parsedResult, lectureStatus;
  let currentDate = getCurrentDate();

  const semester = '20222020';
  const ApiUrl = `https://blackboard.sejong.ac.kr/webapps/bbgs-OnlineAttendance-BB5cf774ff89eaf/excel?selectedUserId=${studentId}&crs_batch_uid=${semester}${deptId}${courseId}${classId}&title=${studentId}&column=사용자명,위치,컨텐츠명,학습한시간,학습인정시간,컨텐츠시간,온라인출석진도율,온라인출석상태(P/F)`;

  try {
    await FileSystem.downloadAsync(
      encodeURI(ApiUrl),
      FileSystem.documentDirectory + courseId,
    ).then(({status}) => {
      console.log(status);
      // if (status !== 200) throw new Error('helleo');
    });
    srcXlsFile = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + courseId,
    );
    xlsRawObjects = await readXlsxData(srcXlsFile).catch(e => {
      console.log(`read error ${courseId}`);
      throw new Error(e);
    });
    console.log(xlsRawObjects);
    let xlsParsedObjects = XLSX.utils.sheet_to_json(
      xlsRawObjects.Sheets[xlsRawObjects.SheetNames[0]],
    );
    xlsParsedObjects.forEach(
      singleObject => (
        ((parsedResult = parseLectureName(singleObject['컨텐츠명'])),
        (lectureStatus = parseLectureStatus(
          parsedResult[0],
          parsedResult[1],
          currentDate,
          singleObject['온라인출석상태(P/F)'],
        ))),
        lectureData.push({
          location: singleObject['위치'],
          progress: singleObject['온라인출석진도율'],
          is_pass: singleObject['온라인출석상태(P/F)'] === 'P' ? true : false,
          start_date: parsedResult[0],
          end_date: parsedResult[1],
          lecture_name: parsedResult[2],
          lecture_status: lectureStatus,
        })
      ),
    );
  } catch (e) {
    // console.log(setIsParse(data => data + 1));
    throw new Error(`hello error ${e}`);
  }
  return lectureData;
};

export default parseXlsxData;

// {location: "1주차 (2022.03.02-2022.03.06)",
// lecture_name: "XIN - [기계학습][1주차] 과목소개_20220302 / 2022-03-02 00:00 ~ 2022-03-06 23:59",
//  progress: 100, is_pass: true}
