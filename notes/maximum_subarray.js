const maxSubArray = function (nums) {
  let last = 0;
  let max = nums[0];
  for (let num of nums) {
    if (last >= 0) {
      last += num;
    } else {
      last = num;
    }
    if (last > max) {
      max = last;
    }
  }
  return max;
};