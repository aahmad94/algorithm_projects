const firstMissing =  (nums) => {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let min1;
  let min2;
  let max1;
  let max2;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0 && nums[i] < min) min = nums[i];
    if (nums[i] >= 0 && nums[i] > max) max = nums[i];
  }

  min1 = min - 1 <= 0 ? Number.MAX_VALUE : min - 1;
  min2 = min + 1;
  max1 = max - 1 <= 0 ? Number.MAX_VALUE : max - 1;
  max2 = max + 1;


  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === min1) min1 = Number.MAX_VALUE;
    if (nums[i] === min2) min2 = Number.MAX_VALUE;
    if (nums[i] === max1) max1 = Number.MAX_VALUE;
    if (nums[i] === max2) max2 = Number.MAX_VALUE;
  }

  return Math.min(min1, min2, max1, max2);
};

// console.log(firstMissing([1, 2, 0])); // => 3
console.log(firstMissing([3, 4, -1, 1])); // => 2