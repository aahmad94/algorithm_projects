const binarySearch = function (nums, target) {
  if (nums === null || nums.length === 0) { return -1; }

  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid + 1);

  if (nums[mid] === target) { return mid; }
  else if (nums[mid] > target) { return binarySearch(left, target); }
  else {
    const searchRight = binarySearch(right, target);
    if (searchRight === -1) { return -1; }
    else { return mid + searchRight + 1; }
  }
};

module.exports = binarySearch;

let binarySearchIterative = function (a, key) {

  let low = 0;
  let high = a.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] === key) {
      return mid;
    }

    if (key < a[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};
