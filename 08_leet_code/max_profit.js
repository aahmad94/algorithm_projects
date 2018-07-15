var maxProfit = function (prices) {
  let count = 0;
  for (let i = 0, j = 1; i < prices.length - 1;) {
    if (prices[i + 1] && prices[i + 1] < prices[i]) {
      i++;
      j = i + 1;
      continue;
    }

    if (prices[j + 1] && prices[j + 1] > prices[j]) {
      j++;
      continue;
    }

    if (prices[j] > prices[i]) {
      count += prices[j] - prices[i];
      i = j + 1;
      j = i + 1;
      continue;
    }

    i++;
    j = i + 1;

  }
  return count;
};