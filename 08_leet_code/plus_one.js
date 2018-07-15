var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      if (i === 0) {
        digits[i] = 0;
        return [1].concat(digits);
      }
      digits[i] = 0;
    } else {
      digits[i]++;
      break;
    }
  }
  return digits;
};