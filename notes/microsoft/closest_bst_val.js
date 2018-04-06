var closestValue = function (root, target) {
  let childVal = 0;

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
    childVal = closestValue(root.left, target);
  }
  if (target > root.val) {
    childVal = closestValue(root.right, target);
  }

  return Math.abs(target - childVal) >= Math.abs(target - root.val) ? root.val : childVal;
};

// iterative soln
// var closestValue = function (root, target) {
//   let curr = root;
//   let closestVal = root.val;
//   while (curr != null) {
//     const currDiff = Math.abs(target - closestVal)
//     const sampleDiff = Math.abs(target - curr.val);
//     closestVal = currDiff < sampleDiff ? closestVal : curr.val;
//     if (closestVal === target) {
//       return closestVal;
//     }
//     curr = curr.val < target ? curr.right : curr.left;
//   }
//   return closestVal;
// };