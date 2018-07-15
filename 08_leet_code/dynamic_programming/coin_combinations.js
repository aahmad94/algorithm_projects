var coinChange = function (coins, amount) {
  const combinations = [1];

  for (let i = 1; i <= amount; i++) {
    combinations[i] = 0;
  }

  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i]) {
        combinations[j] += combinations[j - coins[i]];
      }
    }
  }
  return combinations[amount];
};

// time: n * m where n = num coins and m = amount
// space = m