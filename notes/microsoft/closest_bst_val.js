var closestValue = function (root, target) {
  let result = 0;

  if (root.val === target) {
    return root.val;
  }

  if (root.left === null && root.right === null) {
    return root.val;
  }

  if (target < root.val && root.left === null) {
    return root.val;
  }

  if (target > root.val && root.right === null) {
    return root.val;
  }

  if (target < root.val) {
    result = closestValue(root.left, target);
  }

  if (target > root.val) {
    result = closestValue(root.right, target);
  }

  return Math.abs(target - result) > Math.abs(target - root.val) ? root.val : result;
};