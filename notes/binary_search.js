var search = function (nums, target) {
  if (nums === null || nums.length === 0) { return -1; }

  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1);

  if (nums[mid] === target) { return mid; }
  else if (nums[mid] > target) { return search(left, target); }
  else {
    const searchRight = search(right, target);
    if (searchRight === -1) { return -1; }
    else { return mid + searchRight + 1; }
  }
};