let findMaxSumSubArr = function (arr) {
  let globalMax = arr[0];
  let currMax = arr[0];
  let startIdx = 0;
  let endIdx = 0;
  let currIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (currMax < 0) {
      currIdx = i;
      currMax = arr[i];
    } else {
      currMax += arr[i];
    }
    if (globalMax < currMax) {
      startIdx = currIdx;
      endIdx = i;
      globalMax = currMax;
    }
  }
  return [startIdx, endIdx];
};