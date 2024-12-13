// exercise link: https://leetcode.com/problems/add-binary/description/

function addBinary(a: string, b: string): string {
  let response = '';
  let plus = '';
  let lenA = a.length - 1;
  let lenB = b.length - 1;
  while (lenA >= 0 || lenB >= 0) {
    if (plus === '1') {
      if (a[lenA] === '1' && b[lenB] === '1') {
        response = '1' + response;
        plus = '1';
      } else if (a[lenA] === '1' || b[lenB] === '1') {
        response = '0' + response;
        plus = '1';
      } else {
        response = '1' + response;
        plus = '';
      }
    } else {
      if (a[lenA] === '1' && b[lenB] === '1') {
        response = '0' + response;
        plus = '1';
      } else if (a[lenA] === '1' || b[lenB] === '1') {
        response = '1' + response;
      } else if (a[lenA] === '0' && b[lenB] === '0') {
        response = '0' + response;
      } else {
        
      }
    }
    lenA--;
    lenB--;
  }
  return plus + response;
}
