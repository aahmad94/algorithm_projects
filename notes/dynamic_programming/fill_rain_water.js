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