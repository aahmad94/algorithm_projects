// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke"
// is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
  const map = new Object();

  let ans = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map[s[j]]) {
      i = Math.max(map[s[j]], i);
    }
    ans = Math.max(ans, j - i + 1);
    map[s[j]] = j + 1;
  }

  return ans;
};

// abcabcd -> abcd (4)
console.log(lengthOfLongestSubstring("abcabcd"));
