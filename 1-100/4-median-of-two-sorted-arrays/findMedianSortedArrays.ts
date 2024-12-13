function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const lengthArray = mergedArray.length;

  const indice = Math.trunc(lengthArray / 2);
  if (lengthArray % 2 !== 0) {
    const median = mergedArray[indice];
    return median;
  } else {
    const median = (mergedArray[indice - 1] + mergedArray[indice]) / 2;
    return median;
  }
}
