const checkStatusCounter = lectureData => {
  let thisWeekUnpassCount = 0;
  let allUnpassCount = 0;
  if (lectureData.length !== 0) {
    for (let i = 0; i < lectureData.length; i++) {
      if (lectureData[i].lecture_status === 3) {
        thisWeekUnpassCount++;
        allUnpassCount++;
      }
      if (lectureData[i].lecture_status === 4) {
        allUnpassCount++;
      }
    }
  }

  return [thisWeekUnpassCount, allUnpassCount];
};

export default checkStatusCounter;
