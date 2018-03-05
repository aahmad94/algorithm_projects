// A -> 1
// B -> 2
// C -> 3
//     ...
// Z -> 26
// AA -> 27
// AB -> 28 
// AAA -> 703

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const alphabet = [];
  const chrs = s.split("");
  let sum = 0;

  for (let i = 97; i < 123; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  for (let i = 0; i < chrs.length; i++) {
    sum *= 26;
    sum += alphabet.indexOf(chrs[i].toLowerCase()) + 1;
  }

  return sum;
};