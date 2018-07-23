const coinChange1 = (coins, amt) => {
  return coinChangeRec1(0, coins, amt);
};

const coinChangeRec1 = (idx, coins, amt) => {
  if (amt === 0) return 0;
  if (idx >= coins.length) return -1;

  let minCoins = Number.MAX_VALUE;
  const x = Math.floor(amt / coins[idx]);

  for (let i = x; i >= 0; i--) {
    const res = coinChangeRec1(idx + 1, coins, amt - i * coins[idx]);
    if (res >= 0) {
      minCoins = Math.min(minCoins, res + i);
    } 
  }

  return minCoins === Number.MAX_VALUE ? -1 : minCoins;
};

// time complexity: O(S^n)

// dp top-down soln
const coinChange2 = (coins, amt) => {
 if (amt < 1) return 0;
 return coinChangeDP(coins, amt, [amt]);
};

const coinChangeDP = (coins, rem, count) => {
  if (rem < 0) return -1;
  if (rem === 0) return 0;
  if (count[rem - 1] && rem - 1 !== 0 && count[rem - 1] !== 0) return count[rem - 1];
  let min = Number.MAX_VALUE;
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    const res = coinChangeDP(coins, rem - coin, count);
    if (res >= 0 && res < min) {
      min = res + 1;
    }
  }
  count[rem - 1] = min === Number.MAX_VALUE ? -1 : min;
  return count[rem - 1];
};

// time complexity O(S * n)
// space complexity O(S)
// dp bottom-up soln

const coinChange3 = (coins, amt) => {
  let max = amt + 1;
  const dp = new Array(max);
  dp.fill(max);
  dp[0] = 0;

  for (let i = 1; i <= amt; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amt] > amt ? -1 : dp[amt];
};

console.log(coinChange3([1, 2], 4));
// time complexity O(S * n)
// space complexity O(S)

