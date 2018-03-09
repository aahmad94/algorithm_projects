var numberToWords = function (num) {
  if (num === 0) {
    return "Zero";
  }
  return buildWords(num).trim();
};

const buildWords = (num) => {
  const TO19 = `One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen`.split(" ");

  const TENS = `Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety`.split(" ");
  const MAGNITUDES = "Thousand Million Billion Trillion".split(" ");

  if (num < 20) {
    return TO19[num - 1];
  }
  if (num < 100) {
    const i = Math.floor(num / 10) - 2;
    const remainder = num % 10;
    if (remainder > 0) {
      return TENS[i] + " " + buildWords(remainder);
    } else {
      return TENS[i];
    }
  }
  if (num < 1000) {
    const i = Math.floor(num / 100) - 1;
    const remainder = num % 100;
    if (remainder > 0) {
      return TO19[i] + " Hundred " + buildWords(remainder);
    } else {
      return TO19[i] + " Hundred";
    }
  }
  for (let i = 0; i < MAGNITUDES.length; i++) {
    if (num < Math.pow(1000, i + 1)) {
      const remainder = num % Math.pow(1000, i)
      if (remainder > 0) {
        return buildWords(Math.floor(num / Math.pow(1000, i))) + " " + MAGNITUDES[i - 1] + " " + buildWords(remainder);
      } else {
        return buildWords(Math.floor(num / Math.pow(1000, i))) + " " + MAGNITUDES[i - 1];
      }
    }
  }
};