const maxNonAdjSum = (nums) => {
  const dp = [...nums];
  let max = 0;

  for (let i = 0; i < dp.length; i++) {
    if (dp[i - 2]) {
      dp[i] += dp[i - 2];
    }
    if (dp[i - 3]) {
      dp[i] += dp[i - 3];
    }
    
    max = Math.max(max, dp[i]);
  }

  return max;
};

console.log(maxNonAdjSum([5, 1, 1, 5]));