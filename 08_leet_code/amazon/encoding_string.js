const encodeString = (str) => {
  let resultStr = "";
  let count = 1;
  for (let i = 0, j = 1; i < str.length; j++) {
    if (str[j] != str[i]) {
      resultStr += count.toString();
      resultStr += str[i];
      count = 1;
      i = j;
    } else {
      count += 1;
    }
  }
  return resultStr;
};

console.log(encodeString("AAAABBBCCDAA"));