// Time complexity: O(n^3) -- time limit exceeded
// var longestPalindrome = function (str) {
//   const subs = genSubs(str);
//   let currPalindrome = "";
//   subs.forEach(sub => {
//     if (isValid(sub, currPalindrome)) {
//       currPalindrome = sub;
//     }
//   });
//   return currPalindrome;
// }

// const genSubs = (str) => {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let chr = i; chr < str.length; chr++) {
//       result.push(str.slice(i, chr + 1));
//     }
//   }
//   return result;
// };

// const isValid = (sub, currPalindrome) => {
//   if (sub.length <= currPalindrome.length) { return false; }
//   for (let i = 0; i < Math.floor(sub.length / 2); i++) {
//     if (sub[i] !== sub[sub.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }; 

// Time complexity: O(n^2)
// Soln w/ dynamic programming

const longestPalindrome = (str) => {
  const map = [];
  let maxLength = 0;
  let result; 
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    map.push([]);
  }

  for (let i = str.length - 1; i >= 0; i--) {
    for(let j = i; j < str.length; j++) {
      const length = j - i + 1;
      map[i][j] = (str[i] === str[j]) && (length <= 3 || map[i + 1][j - 1]);
      // if (map[i][j]) count++;
      if (map[i][j] && length >= maxLength) {
        maxLength = length;
        result = str.slice(i, j + 1);
      }
    }
  }
  return maxLength;
};

console.log(longestPalindrome("abccba"));

const longestPalindrome2 = (str) => {
  let start = 0;
  let end = 0;
  for (let i = 0; i < str.length; i++) {
    const len1 = expandAroundCenter(str, i, i); // odd case
    const len2 = expandAroundCenter(str, i, i + 1); // even case
    const len = Math.max(len1, len2);
    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return [start, end];
};

const expandAroundCenter = (str, left, right) => {
  while(left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};

console.log(longestPalindrome2("abccba"));