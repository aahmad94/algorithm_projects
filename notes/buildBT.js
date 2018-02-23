const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

const buildTree = function(preOrder, inOrder) {

  // if preOrder only contains the 'rootVal', return a node with the corresponding values
  if (preOrder.length <= 1) {
    return new Node(preOrder[0]);
  }

  // set root as first element in preOrder traversal
  const rootVal = preOrder[0];
  const root = new Node(rootVal);

  // use 'rootVal' to find partition in the 'preOrder' traversal array;
  // then use the partition to create the left and right children's 'inOrder' traversal 
  const inOrderPartitionIdx = inOrder.indexOf(rootVal);
  const inOrderLeft = inOrder.slice(0, inOrderPartitionIdx);
  const inOrderRight = inOrder.slice(inOrderPartitionIdx +1);

  // the last item in 'inOrderLeft' and 'inOrderRight' can be used to generate the 'preOrderTraversal' for the left and right children
  const preOrderLeftEndIdx = preOrder.indexOf(inOrderLeft[inOrderLeft.length - 1]);
  const preOrderRightEndIdx = preOrder.indexOf(inOrderRight[inOrderLeft.length - 1]);

  // exclude the current root from the 'preOrderTraversal' range that will become the left child's 'preOrderTraversal' 
  const preOrderLeft = preOrder.slice(1, preOrderLeftEndIdx + 1);
  const preOrderRight = preOrder.slice(preOrderLeftEndIdx + 1, preOrder.length);

  // recursively build tree for left and right children
  root.left = buildTree(preOrderLeft, inOrderLeft);
  root.right = buildTree(preOrderRight, inOrderRight);

  return root;
};

// const preOrder = [1, 2, 4, 5, 3]
// const inOrder = [4, 2, 5, 1, 3]
console.log(buildTree([1, 2, 4, 5, 3], [4, 2, 5, 1, 3]));