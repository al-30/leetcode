function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const resp: number[][] = [];

  for (let left = 0; left < nums.length - 2; left++) {
      while (nums[left] <= 0 && nums[left - 1] === nums[left]) {
          left++;
      }

      let center = left + 1;
      let right = nums.length - 1;
      while (center < right) {
          let sum = nums[left] + nums[center] + nums[right];
          if (sum === 0) {
              resp.push([nums[left], nums[center], nums[right]]);
              right--;
          } else if (sum < 0) {
              center++;
          } else {
              right--;
          }
          while (left !== center - 1 && nums[center] === nums[center - 1]) {
              center++;
          }
          while (nums[right] === nums[right + 1]) {
              right--;
          }
      }
  }
  return resp;
}
threeSum([0, 1, 2, -1, 4, 1]);