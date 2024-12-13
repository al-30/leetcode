function reformatDate(date: string): string {
  let [rawday, month, year] = date.split(' ');

  const regex = /st|nd|rd|th/;

  const day = rawday.replace(regex, '').padStart(2, '0');

  const monthMap: Record<string, string> = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };
  let result: string = `${year}-${monthMap[month]}-${day}`;
  return result;
}
const date = '20th Oct 2052';
const date2 = '6th Jun 1933';
const date3 = '26th May 1960';

console.log(reformatDate(date));
console.log(reformatDate(date2));
