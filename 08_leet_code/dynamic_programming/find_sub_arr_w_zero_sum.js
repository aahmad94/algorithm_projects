const findSubArrWZeroSum = (arr) => {
  const map = [];
  for (let i = 0; i < arr.length; i++) {
    map.push([]);
  }
  const answer = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i; j < arr.length; j++) {
      map[i][j] = typeof(map[i][j - 1]) === 'number' ? arr[j] + map[i][j - 1] : arr[j];
      if (map[i][j] === 0) {
        answer.push([i, j]);
      }
    }
  }
  return answer;
};

const arr = [4, 2, -3, -1, 0, 4];
console.log(findSubArrWZeroSum(arr));