class Algorithm {
  static longestConsecutiveBranch(root) {
    if (!root) return 0;
    const props = {
      max: 0
    };
    Algorithm.helper(root.left, 1, root.val, props);
    Algorithm.helper(root.right, 1, root.val, props);
    return props.max;
  }

  static helper(root, num, prev, props) {
    if (!root) return;
    if (root.val === prev + 1) {
      props.max = Math.max(props.max, num + 1);
      Algorithm.helper(root.left, num + 1, root.val, props);
      Algorithm.helper(root.right, num + 1, root.val, props);
    } else {
       Algorithm.helper(root.left, 1, root.val, props);
       Algorithm.helper(root.right, 1, root.val, props);
    }
  }
}

module.exports = Algorithm;