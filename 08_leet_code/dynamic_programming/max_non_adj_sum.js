const maxNonAdjSum = (nums) => {
  const dp = [...nums];
  let max = 0;

  for (let i = 0; i < dp.length; i++) {
    let first = 0;
    let second = 0;
    
    if (dp[i - 2]) {
      first = Math.max(dp[i], dp[i] + dp[i - 2], dp[i-2]);
    }
    if (dp[i - 3]) {
      second = Math.max(dp[i], dp[i] + dp[i - 3], dp[i-3]);
    }
    if (first > 0 || second > 0) {
      dp[i] = Math.max(first, second);
    }
    max = Math.max(max, dp[i]);
  }

  return max;
};

console.log(maxNonAdjSum([10, 11, -6, 2, 5, 1]));
console.log(maxNonAdjSum([5, 1, 1, 5]));

