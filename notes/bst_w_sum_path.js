function Tree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Tree.prototype.hasPathWithSum = function(node, sum) {
  if (!node) {
    return sum === 0 ? true : false;
  } 

  const nextSum = sum - node.value;
  console.log({nextSum});
  if (node && node.left && node.right) {
    return (this.hasPathWithSum(node.left, nextSum) || 
    this.hasPathWithSum(node.left, nextSum))
  }

  if (node && node.left) {
    return this.hasPathWithSum(node.left, nextSum);
  } else {
    return this.hasPathWithSum(node.right, nextSum);
  }
};

const tree = new Tree(22);
tree.left = new Tree(13);
tree.right = new Tree(27);
tree.left.left = new Tree(7);
tree.left.right = new Tree(17);

//           22
//        13    27
//       7  17

console.log(tree.hasPathWithSum(tree, 42));