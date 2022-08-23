const checkStatusCounter = lectureData => {
  let thisWeekUnpassCount = 0;
  let allUnpassCount = 0;
  console.log(lectureData);
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

  //   console.log(thisWeekUnpassCount);
  //   console.log(allUnpassCount);
  return [thisWeekUnpassCount, allUnpassCount];
};

export default checkStatusCounter;
