var coinChange = function (coins, amt) {
  const dp = [1];

  for (let i = 1; i <= amt; i++) {
    dp[i] = 0;
  }

  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amt; j++) {
      if (j >= coins[i]) {
        dp[j] += dp[j - coins[i]];
      }
    }
  }
  return dp[amt];
};

console.log(coinChange([1, 2], 3));

// time: n * m where n = num coins and m = amt
// space = m