function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  function sum(start: number = 0, target: number, loop: number = 0, curr: number[] = []) {
    if (loop === 2) {
      let end = nums.length - 1;

      while (start < end) {
        const currSum = nums[start] + nums[end];

        if (currSum === target) {
          result.push([...curr, nums[start], nums[end]]);
          start++;
          end--;

          while (nums[start] === nums[start - 1]) {
            start++;
          }

          while (nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (currSum > target) {
          end--;
        } else {
          start++;
        }
      }
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }

      sum(i + 1, target - nums[i], loop + 1, [...curr, nums[i]]);
    }
    return;
  }

  sum(0, target);

  return result;
}
const nums = [-1, 0, 1, 2, -1, -4];
console.log(fourSum(nums, -1));
