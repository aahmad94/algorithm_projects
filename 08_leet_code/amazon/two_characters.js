// String t always consists of two distinct alternating characters.
// For example, if string t's two distinct characters are x and y, then t could be xyxyx or yxyxy but not xxyy or xyyx.

// You can convert some string s to string t by deleting characters from.
// When you delete a character from, you must delete all occurrences of it in.
// For example, if s = abaacdabd and you delete the character a, then the string becomes bcdbd.

// Given s, convert it to the longest possible t string.
// Then print the length of string t on a new line;
// if no string t can be formed from, print 0 instead.


function twoCharaters(s) {
  let maxSize = 0;
  let duppedStr = s.slice(0);
  const chrsSet = new Set();

  for (let i = 0; i < s.length; i++) {
    chrsSet.add(duppedStr[i]);
  }

  const uniqChrs = Array.from(chrsSet);
  for (let i = 0; i < uniqChrs.length - 1; i++) {
    for (let j = i + 1; j < uniqChrs.length; j++) {
      duppedStr = duppedStr.split("").filter((chr) => (chr === uniqChrs[i] || chr === uniqChrs[j])).join("");
      if (validT(duppedStr)) {
        if (duppedStr.length > maxSize) {
          maxSize = duppedStr.length;
        }
      }
      duppedStr = s.slice(0);
    }
  }
  return maxSize;
}

function validT(s) {
  const chrsSet = new Set();
  const chrs = s.split("");

  for (let i = 0; i < s.length; i++) {
    chrsSet.add(chrs[i]);
    if (chrsSet.size > 2) return false;
    if (chrs[i] === chrs[i + 1]) return false;
  }
  if (chrsSet.size !== 2) return false;
  return true;
}