function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let result = nums[0] + nums[1] + nums[2];

  if (nums.length === 3) {
    return result;
  }

  for (let i = 0; i < nums.length - 2; i++) {
    let med = i + 1;
    let rigth = nums.length - 1;

    while (med < rigth) {
      let sum = nums[i] + nums[med] + nums[rigth];
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }

      if (sum > target) {
        rigth--;
      } else {
        med++;
      }
    }
  }

  return result;
}

const nums = [-84, 92, 26, 19, -7, 9, 42, -51, 8, 30, -100, -13, -38];
threeSumClosest(nums, 78);
