const knapsacks = (weights, values, capacity) => {
  const memo = {};
  return rec(weights, values, capacity, weights.length, memo);
};

const rec = (weights, values, capacity, n, memo) => {
  if (n <= 0 || capacity <= 0) return 0;
  const key = `${capacity}:${n}`;
  if (memo[key]) return memo[key];
  if (weights[n - 1] <= capacity) {
    memo[key] = Math.max(
      values[n - 1] + rec(weights, values, capacity - values[n - 1], n - 1, memo),
      rec(weights, values, capacity, n - 1, memo)
    );
  } else {
    memo[key] = rec(weights, values, capacity, n - 1, memo);
  }
  return memo[key];
};

const weights = [1, 2, 4, 2, 5];
const values = [5, 3, 5, 3, 2];

console.log(knapsacks(weights, values, 11)); // off by one, input of 10 should give 15