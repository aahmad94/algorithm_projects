const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;
    // check to see that we're in one partition
    if (nums[low] <= nums[mid]) {
      // check to see if target is in this domain's range
      if (nums[low] <= target && nums[mid] > target) {
        high = mid - 1;
      } else {
        // if target is not within bounds of this range,
        // check high half
        low = mid + 1;
      }
    } else {
      // check to see if target is in this domain's range
      if (nums[high] >= target && nums[mid] < target) {
        low = mid + 1;
      } else {
        // if target is not within bounds of this range,
        // check left half
        high = mid - 1;
      }
    }
  }
  return nums[low] === target ? low : -1;
};