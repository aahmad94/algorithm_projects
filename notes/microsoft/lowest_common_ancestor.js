var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  if (left) {
    return left;
  } else {
    return right;
  }
};

// const lowestCommonAncestor = (root, p, q) => {
//   if (root === null || root === p || root === q) {
//     return root;
//   }
//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);
//   if (left && !right) { return left; }
//   if (right && !left) { return right; }
//   if (left && right) { return root; }
// };