const Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

const findBSTError = (root, max = null, min = null) => {
  if (!root) return null;
  if (max && root.val > max) return { max };
  if (min && root.val < min) return { min };

  if (root.left && root.right) {
    return (
      findBSTError(root.left, root.val, min) ||
      findBSTError(root.right, max, root.val)
    );
  } else if (root.left) {
    return findBSTError(root.left, root.val, min);
  } else {
    return findBSTError(root.right, max, root.val);
  }
};

const root = new Node(15);
root.left = new Node(16);
root.right = new Node(17);

console.log(findBSTError(root));