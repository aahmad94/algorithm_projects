// dp approach 1
var nthUglyNumber = function (n) {
  let count = 0;
  let currUglyNum;
  const memo = {};
  for (let i = 1; count <= n - 1; i++) {
    const isUglyFlag = isUgly(i, memo);
    if (isUglyFlag) {
      count++;
      currUglyNum = i;
    }
  }
  console.log(memo);
  return currUglyNum;
};

var isUgly = function (num, memo) {
  if (typeof (memo[num]) === 'boolean') {
    return memo[num];
  }

  if (num <= 0) return false;
  if (num === 1) return true;

  const primes = [2, 3, 5];
  for (let i = 0; i < primes.length; i++) {
    if (num % primes[i] === 0) {
      memo[num] = isUgly(num / primes[i], memo);
      if (memo[num]) return true;
    }
  }

  return false;
};
