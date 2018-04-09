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
