function Tree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Tree.nodePathWithSum = function(node, sum) {
  if (!node) {
    return sum === 0 ? true : false;
  } 

  const nextSum = sum - node.value;
  console.log({nextSum});
  if (node && node.left && node.right) {
    return (this.nodePathWithSum(node.left, nextSum) || 
    this.nodePathWithSum(node.left, nextSum))
  }

  if (node && node.left) {
    return this.nodePathWithSum(node.left, nextSum);
  } else {
    return this.nodePathWithSum(node.right, nextSum);
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

console.log(Tree.nodePathWithSum(tree.left, 20));