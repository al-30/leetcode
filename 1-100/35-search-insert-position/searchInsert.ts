function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  let half = 0;

  while (start <= end) {
    half = Math.trunc((end + start) / 2);
    if (nums[half] === target) {
      return half;
    }
    if (nums[half] > target) {
      end = half - 1;
    } else {
      start = half + 1;
    }
  }
  if (nums[half] > target) {
    return half;
  } else if (nums[half] < target) {
    return half + 1;
  } else {
    return 0;
  }
}
