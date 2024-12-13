function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let result = nums[0] + nums[1] + nums[2];

  if (nums.length === 3) {
    return result;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    let mid = i + 1;
    let rigth = nums.length - 1;

    while (mid < rigth) {
      const sum = nums[i] + nums[mid] + nums[rigth];
      const currentDiff = Math.abs(sum - target);
      const currentResult = Math.abs(result - target);

      if (currentDiff < currentResult) result = sum;

      if (sum > target) {
        rigth--;
      } else {
        mid++;
      }
    }
  }

  return result;
}

const nums = [-84, 92, 26, 19, -7, 9, 42, -51, 8, 30, -100, -13, -38];
threeSumClosest(nums, 78);
