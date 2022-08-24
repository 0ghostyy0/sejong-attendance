import {getCurrentDate} from './parseXlsxData';
const weekNumberCounter = () => {
  let currentDate = getCurrentDate();
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
