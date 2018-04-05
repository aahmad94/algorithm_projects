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
//     for (let j = i; j < str.length; j++) {
//       result.push(str.slice(i, j + 1));
//     }
//   }
//   return result;frf
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
  const size = str.length;
  const map = [];
  let maxLength = 0;
  let result; 

  for (let i = 0; i < size; i++) {
    map.push([]);
  }

  for (let i = size - 1; i >= 0; i--) {
    for(let j = i; j < size; j++) {
      const length = j - i + 1;
      map[i][j] = (str[i] === str[j]) && (length <= 3 || map[i + 1][j - 1]);
      
      if (map[i][j] && length >= maxLength) {
        maxLength = length;
        result = str.slice(i, j + 1);
      }
    }
  }
  return result;
};