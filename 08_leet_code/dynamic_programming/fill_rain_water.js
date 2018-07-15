var trap = function (height) {
  let total = 0;
  for (let i = 0; i < height.length; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    for (let j = i; j >= 0; j--) {
      maxLeft = Math.max(maxLeft, height[j]);
    }
    for (let j = i; j < height.length; j++) {
      maxRight = Math.max(maxRight, height[j]);
    }
    total += Math.min(maxLeft, maxRight) - height[i];
  }
  return total;
};

// time: O(n^2)
// space: O(c)

// dp soln
var _trap = function (height) {
  let total = 0;

  // dp
  const maxLeftHeights = {};
  const maxRightHeights = {};

  // init dp
  maxLeftHeights[0] = height[0];
  maxRightHeights[height.length - 1] = height[height.length - 1];

  // fill dp
  for (let i = 1; i < height.length; i++) {
    maxLeftHeights[i] = Math.max(height[i], maxLeftHeights[i - 1]);
  }

  // fill dp
  for (let i = height.length - 2; i >= 0; i--) {
    maxRightHeights[i] = Math.max(height[i], maxRightHeights[i + 1]);
  }

  // refer to dp store to calc volume
  for (let i = 0; i < height.length; i++) {
    total += Math.min(maxLeftHeights[i], maxRightHeights[i]) - height[i];
  }
  return total;
};

// time: O(n)
// space: O(n)

// 2 pointer soln
var __trap = function (height) {
  let first = 0;
  let last = height.length - 1;
  let maxLeft = height[first];
  let maxRight           = height[last];
  let total = 0;

  while (first < last) {
    if (maxLeft < maxRight) {
      total += (maxLeft - height[first]);
      first += 1;
      maxLeft = Math.max(maxLeft, height[first]);
    } else {
      total += (maxRight - height[last]);
      last -= 1;
      maxRight = Math.max(maxRight, height[last]);
    }
  }
  return total;
};
// time: O(n)
// space: O(sc)