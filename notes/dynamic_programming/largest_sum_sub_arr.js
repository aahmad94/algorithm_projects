let fondMaxSumSubArr = function (arr) {
  let globalMax = arr[0];
  let currMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (currMax < 0) {
      currMax = arr[i];
    } else {
      currMax += arr[i];
    }
    if (globalMax < currMax) {
      globalMax = currMax;
    }
  }
  return globalMax;
};

// time complexity: O(n);
// space complexity: O(c);