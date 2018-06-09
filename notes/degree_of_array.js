const findShortestSubArray = (arr) => {
  const firstIndicies = {};
  const lastIndicies = {};
  const counts = {};
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const j = arr[i];
    counts[j] = (counts[j] || 0) + 1;
    max = Math.max(max, counts[j]);
    if (firstIndicies[j] === undefined) {
      firstIndicies[j] = i;
    }
    lastIndicies[j] = i;
  }
  let ans = arr.length;
  for (const j in counts) {
    if (counts[j] === max) {
      ans = Math.min(ans, lastIndicies[j] - firstIndicies[j] + 1);
    }
  }
  return ans;
};