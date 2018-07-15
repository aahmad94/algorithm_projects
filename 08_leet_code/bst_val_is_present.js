const isPresent = (root, val) => {
  if (root === null) {
    return -1;
  } else if (root.data === val) {
    return 1;
  }


  let left = isPresent(root.left, val);
  let right = isPresent(root.right, val);

  return (left || right);
};