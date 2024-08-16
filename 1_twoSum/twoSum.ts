function soma(nums: Array<number>, target: number) {
  for (let index = 0; index < nums.length; index++) {
    for (let index2 = index + 1; index2 < nums.length; index2++) {
      if (nums[index] + nums[index2] === target) {
        return [index, index2];
      }
    }
  }
}

let nums = [2, 11, 15, 7];
let target = 9;
console.log(soma(nums, target));
