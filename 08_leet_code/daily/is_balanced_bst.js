const isBalanced = function (root) {
  if (!root) {
    return true;
  }
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  if ((Math.abs(left - right) <= 1) && isBalanced(root.left) && isBalanced(root.right)) {
    return true;
  }

  return false;
};

const maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  leftDepth++;
  rightDepth++;

  return leftDepth > rightDepth ? leftDepth : rightDepth;
};
