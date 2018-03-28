// Time complexity: O(n^3) -- time limit exceeded
// var longestPalindrome = function (str) {
//   const subs = genSubs(str);
//   console.log(subs);
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

// Time complexity: O(n * log(n))


const 