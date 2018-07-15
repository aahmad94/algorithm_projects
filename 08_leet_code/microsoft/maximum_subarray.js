const maxSubArrayIter = (nums) => {
  let contigSum = 0;
  let max = nums[0];
  for (let num of nums) {
    if (contigSum < 0) {
      contigSum = num;
    } else {
      contigSum += num;
    }
    if (contigSum > max) {
      max = contigSum;
    }
  }
  return max;
};