var closestValue = function (root, target) {
  let childVal = 0;

  // if root.val is target
  if (root.val === target) {
    return root.val;
  }

  // if root has no children
  if (!root.left && !root.right) {
    return root.val;
  }

  // if target is smaller than root.val and no left child
  if (target < root.val && !root.left) {
    return root.val;
  }

  // if target is larger than root.val and no right child
  if (target > root.val && !root.right) {
    return root.val;
  }

  // traverse left if target is less than root
  if (target < root.val) {
    childVal = closestValue(root.left, target);
  }

  // traverse right if target is greater than root
  if (target > root.val) {
    childVal = closestValue(root.right, target);
  }

  // need to distinguish which is closer -- root or it's child?
  return Math.abs(target - childVal) >= Math.abs(target - root.val) ? root.val : childVal;
};

// iterative soln 
// log(n) time
// constant space (where as recursive approach requires log(n) space requires)
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