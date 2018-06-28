/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const binaryNum = toBinary(num);
  const binaryCompliment = generateCompliment(binaryNum);
  const baseTenCompliment = binaryToBaseTen(binaryCompliment);
  return baseTenCompliment;
};

const toBinary = function (num) {
  const remainder = num % 2;
  const quotient = Math.floor(num / 2);
  if (quotient === 0) {
    return '1';
  }
  return toBinary(quotient).concat(remainder.toString());
};

const generateCompliment = function (str) {
  const nums = str.split("");
  const compliment = nums.map((num) => {
    if (num === "0") {
      return 1;
    } else {
      return 0;
    }
  });
  return compliment.join("");
};

const binaryToBaseTen = function (strNum) {
  let result = 0;
  let j = 1;
  for (let i = strNum.length - 1; i >= 0; i-- , j *= 2) {
    const digit = Number.parseInt(strNum[i]);
    if (digit === 1) {
      result += j;
    }
  }
  return result;
};