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
    '09010000',
    '09080000',
    '09150000',
    '09220000',
    '09290000',
    '10060000',
    '10130000',
    '10200000',
    '10270000',
    '11030000',
    '11100000',
    '11170000',
    '11240000',
    '12010000',
    '12080000',
    '12150000',
    '12220000',
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
