var twoSum = function (nums, target) {
  const result = new Array();
  let store = new Object();
  for (let i = 0; i < nums.length; i++) {
    store[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    let complimentIdx = store[compliment];
    let tuple = [i, complimentIdx];
    if (store[compliment]) {
      return tuple;
    }
  }
  return -1;
};