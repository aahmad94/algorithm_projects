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

// time: O(log(n))
// space: O(log(n))

module.exports = binarySearch;

const binarySearchIterative = function (a, key) {
  let min = 0;
  let max = a.length - 1;
  while (min <= max) {
    let mid = min + Math.floor((max - min) / 2);
    if (a[mid] === key) {
      return mid;
    }

    if (key < a[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
};

// time: O(log(n))
// space: O(n)
