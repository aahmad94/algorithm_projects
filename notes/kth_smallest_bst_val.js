const kthSmallest = function (root, k) {
  const arr = inOrderTraversal(root);
  return arr.slice(0, k)[k - 1];

};

const inOrderTraversal = function (root) {
  if (root.left === null && root.right === null) {
    return [root.val];
  }

  let left = [];
  let right = [];

  if (root.left) {
    left = inOrderTraversal(root.left);
  }

  if (root.right) {
    right = inOrderTraversal(root.right);
  }

  return left.concat([root.val]).concat(right);
}