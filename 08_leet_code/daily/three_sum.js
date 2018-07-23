var threeSum = function (nums) {
  const result = [];
  const set = new Set(nums);
  const compliments = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {

      const sum = nums[i] + nums[j];
      const compliment = -1 * sum;

      if (set.has(compliment) && !compliments.has(compliment)) {
        result.push([nums[i], nums[j], compliment]);
      }
    }
  }
  return result;
};