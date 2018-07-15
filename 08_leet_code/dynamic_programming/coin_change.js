const coinChange1 = (coins, amt) => {
  return coinChangeRec1(0, coins, amt);
};

const coinChangeRec1 = (idx, coins, amt) => {
  if (amt === 0) return 0;
  if (idx >= coins.length) return -1;

  let minCoins = Number.MAX_VALUE;
  const x = Math.floor(amt / coins[idx]);

  for (let i = x; i >= 0; i--) {
    console.log({i});
    const res = coinChangeRec1(idx + 1, coins, amt - i * coins[idx]);
    if (res >= 0) {
      minCoins = Math.min(minCoins, res + x);
    } 
  }

  return minCoins === Number.MAX_VALUE ? -1 : minCoins;
};