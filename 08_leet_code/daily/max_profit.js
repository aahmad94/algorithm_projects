var maxProfit = function (prices) {
  let count = 0;
  for (let i = 0, j = 1; j < prices.length;) {
    if (prices[i + 1] && prices[i + 1] < prices[i]) {
      i++;
      j = i + 1;
      continue;
    }
    if (prices[j] < prices[i]) {
      i = j;
      j++;
      continue;
    }
    if (prices[j] - prices[i] > count) {
      count = prices[j] - prices[i];
      j++;
      continue;
    }
    j++;
  }
  return count;
};