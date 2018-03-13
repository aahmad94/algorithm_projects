/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     const length = s.length;
//     const map = new Set();
//     let ans = 0, i = 0, j = 0;
//     while (i < length && j < length) {
//         if (!map.has(s[j])) {
//             map.add(s[j]);
//             j++;
//             ans = Math.max(ans, j - i);
//         } else {
//             map.delete(s[i]);
//             i++;
//         }
//     }
//     return ans;
// };

var lengthOfLongestSubstring = function (s) {
  const length = s.length;
  const map = new Object();
  let ans = 0;
  for (let i = 0, j = 0; j < length; j++) {
    if (map[s[j]]) {
      // let i become the position of the previous instance of the repeated character if it's greater than i -- we will subtract this value from j (window-front) and add 1 to calculate the length of the next unique substring 
      i = Math.max(map[s[j]], i);
    }
    ans = Math.max(ans, j - i + 1);
    map[s[j]] = j + 1;
  }
  return ans;
};

console.log(lengthOfLongestSubstring("qwwkewo"));