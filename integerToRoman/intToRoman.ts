function intToRoman(num: number): string {
  let result = '';
  if (num >= 1000) {
    let len = Math.trunc(num / 1000);
    for (let i = 0; i < len; i++) {
      result += 'M';
    }
  }

  if (num % 1000 >= 100) {
    let hundred = Math.trunc(num % 1000);
    if (hundred < 400) {
      let len = Math.trunc(hundred / 100);
      for (let i = 0; i < len; i++) {
        result += 'C';
      }
    } else if (hundred >= 400 && hundred < 500) {
      result += 'CD';
    } else if (hundred >= 500 && hundred < 600) {
      result += 'D';
    } else if (hundred > 500 && hundred < 900) {
      result += 'D';
      let len = Math.trunc(hundred / 100);
      for (let i = 5; i < len; i++) {
        result += 'C';
      }
    } else {
      result += 'CM';
    }
  }

  if (num % 100 >= 10) {
    let ten = Math.trunc(num % 100);
    if (ten >= 40 && ten < 50) {
      result += 'XL';
    } else if (ten < 40) {
      let len = Math.trunc(ten / 10);
      for (let i = 0; i < len; i++) {
        result += 'X';
      }
    } else if (ten > 50 && ten < 90) {
      result += 'L';
      let len = Math.trunc(ten / 10);
      for (let i = 5; i < len; i++) {
        result += 'X';
      }
    } else if (ten === 50) {
      result += 'L';
    } else {
      result += 'XC';
    }
  }
  let unit = num % 10;

  if (unit > 0) {
    if (unit === 4) {
      return (result += 'IV');
    } else if (unit === 5) {
      return (result += 'V');
    } else if (unit === 9) {
      return (result += 'IX');
    } else if (unit > 5 && unit < 9) {
      result += 'V';
    }
    let left = 0;
    let rig = 5;
    while (left !== unit && rig !== unit) {
      result += 'I';
      left++;
      rig++;
    }
  }
  return result;
}

// intToRoman(3854); /* result === "MMMDCCCLIV" */

// intToRoman(21);
// intToRoman(11);
// intToRoman(1994); /* result === "MMMCDL" */
// intToRoman(3749); /* result === "MMMDCCXLIX" */
// intToRoman(3749);
intToRoman(3);
