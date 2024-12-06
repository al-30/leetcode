function checkIfExist(arr: number[]): boolean {
  const ob: Record<number, boolean> = {};
  for (let i = 0; i < arr.length; i++) {
    ob[arr[i]] = true;
  }

  for (let i = 0; i < arr.length; i++) {
    let md = arr[i] / 2;
    if (md !== 0 && ob[md]) {
      return true;
    } else if (arr[i] === 0 && arr[i + 1] === 0) {
      return true;
    }
  }
  return false;
}

const arr = [-2, 0, 10, -19, 4, 6, -8];
checkIfExist(arr);
