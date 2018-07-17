/*
Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).
n vertical lines are drawn such that the two endpoints of line i is at(i, ai) and(i, 0).
Find two lines, which together with x - axis forms a container, such that the container contains the most water.
Note: You may not slant the container and n is at least 2.
*/

var maxArea = function (height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    if (height[i] <= height[j]) {
      max = Math.max(max, height[i] * (j - i));
      i++;
    } else {
      max = Math.max(max, height[j] * (j - i));
      j--;
    }
  }
  return max;
};