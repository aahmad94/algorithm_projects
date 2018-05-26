var majorityElement = function (nums) {
  let largestNum;
  const numsCts = {};
  nums.forEach(num => {
    if (numsCts[num]) {
      numsCts[num]++;
    } else {
      numsCts[num] = 1;
    }

    if (!largestNum || numsCts[num] >= numsCts[largestNum]) {
      largestNum = num;
    }
  });

  return largestNum;
};