const getCurrentDate = () => {
  let time = new Date();
  let month, date, hour, min;

  time.getMonth() + 1 < 10
    ? (month = '0' + String(time.getMonth() + 1))
    : (month = String(time.getMonth() + 1));
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

const weekNumberCounter = () => {
  let currentDate = getCurrentDate();
  console.log(currentDate);
  let weekNumber,
    i = 1;
  let weeks = [
    '03020000',
    '03090000',
    '03160000',
    '03230000',
    '03300000',
    '04060000',
    '04130000',
    '04200000',
    '04270000',
    '05040000',
    '05110000',
    '05180000',
    '05250000',
    '06010000',
    '06080000',
    '06220000',
    '06290000',
  ];
  for (i in weeks) {
    if (weeks[i] > currentDate) {
      weekNumber = i;
      break;
    } else {
      weekNumber = 0;
    }
  }
  return weekNumber;
};
export default weekNumberCounter;
