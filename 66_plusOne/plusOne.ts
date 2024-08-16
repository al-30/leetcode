// exercise link: https://leetcode.com/problems/plus-one/description/ 
function plusOne(digits: number[]): number[] {
  let index = digits.length - 1;

  digits[index] += 1;
  while (digits[index] > 9) {
    digits[index] %= 10;
    if (index === 0) {
      digits.unshift(1);
      return digits;
    } else {
      digits[index - 1] += 1;
      index--;
    }
  }
  return digits;
}

plusOne([9, 9]);
