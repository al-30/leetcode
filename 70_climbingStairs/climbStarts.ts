function climbStairs(n: number): number {
  let prev = 0;
  let curr = 1;
  let result = 0;

  while (n >= 1) {
    result = prev + curr;
    prev = curr;
    curr = result;
    n--;
  }
  return result;
}

const n = 1;
const n2 = 3;
climbStairs(n);
climbStairs(n2);
