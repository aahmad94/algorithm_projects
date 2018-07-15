// Input: ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]
// Output: ["b", "l", "u", "e", " ", "i", "s", " ", "s", "k", "y", " ", "t", "h", "e"]

var reverseWords = function (str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    [str[i], str[j]] = [str[j], str[i]];
  }
  let i = 0;
  let j = 0;
  let next;
  while (i < str.length) {
    while (i < str.length && str[i] !== " ") {
      i++;
    }
    next = i + 1;
    i--;
    while (j < i) {
      [str[i], str[j]] = [str[j], str[i]];
      i--;
      j++;
    }
    i = next;
    j = next;
  }
};