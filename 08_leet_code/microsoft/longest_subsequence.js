// X ~ "a h a e i o u u" m ~ length
// Y ~ "a e i o u" n ~ length 

const longestSubsequence = (str, seq) => {
  // return rec(str, seq, str.length, seq.length);
  const memo = {};
  return dp(str, seq, str.length, seq.length, memo);
};

const rec =(str, seq, m, n) => {
  if (m === 0 || n === 0) return 0;
  if (str[m - 1] === seq[n - 1]) {
    return Math.max(
      rec(str, seq, m - 1, n - 1), 
      rec(str, seq, m - 1, n)
    ) + 1;
  }
  else {
    return rec(str, seq, m - 1, n);
  }
};

const dp = (str, seq, m, n, memo) => {
  if (m === 0 || n === 0) return 0;
  const key = `${m}:${n}`;
  if (memo[key]) return memo[key];
  let res;
  if (str[m - 1] === seq[n - 1]) {
    res = Math.max(
      dp(str, seq, m - 1, n - 1, memo),
      dp(str, seq, m - 1, n, memo)
    ) + 1;
  } else {
    res = dp(str, seq, m - 1, n, memo);
  }
  memo[key] = res;
  return res;
};

console.log(longestSubsequence("a e u e u a e i o u i o", "aeiou")); // 7