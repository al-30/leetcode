function maximumBeauty(items: number[][], queries: number[]): number[] {
  items.sort((a, b) => a[0] - b[0]);

  const response: number[] = [];
  const temp: number[][] = [];

  for (let i = 0; i < queries.length; i++) {
    temp.push([queries[i], i, 0]);
  }

  temp.sort((a, b) => a[0] - b[0]);

  let indice = 0;
  let maximumBeauty: number = 0;

  for (let i = 0; i < queries.length; i++) {
    while (items[indice] && items[indice][0] <= temp[i][0]) {
      if (items[indice][1] > maximumBeauty) {
        maximumBeauty = items[indice][1];
      }
      indice++;
    }
    temp[i][2] = maximumBeauty;
  }

  for (let i = 0; i < temp.length; i++) {
    response[temp[i][1]] = temp[i][2];
  }

  return response;
}

const items = [
  [1, 2],
  [3, 2],
  [2, 4],
  [5, 6],
  [3, 5],
]; //Output: [2,4,5,5,6,6,2,4,5]
const items2 = [
  [1, 2],
  [1, 2],
  [1, 3],
  [1, 4],
]; //Output: [4]

const items3 = [[10, 1000]]; //Output: [0]

maximumBeauty(items, [1, 2, 3, 4, 5, 6, 1, 2, 3]);
maximumBeauty(items2, [1]);
maximumBeauty(items3, [5]);
