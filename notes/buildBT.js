const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

const buildTree = function(preOrder, inOrder) {

  // if preOrder only contains the 'rootVal', return a node with the corresponding values
  if (preOrder.length <= 1) {
    return new Node(preOrder.shift());
  }

  // set root as first element in preOrder traversal
  const rootVal = preOrder.shift();
  const root = new Node(rootVal);

  // use 'rootVal' to find partition in the 'preOrder' traversal array;
  // then use the partition to create the left and right children's 'inOrder' traversal 
  const inOrderPartitionIdx = inOrder.indexOf(rootVal);
  const inOrderLeft = inOrder.slice(0, inOrderPartitionIdx);
  const inOrderRight = inOrder.slice(inOrderPartitionIdx +1);

  // the length of 'inOrderLeft' can be used to generate the 'preOrder' for the left and right children
  // exclude the current root from the 'preOrderTraversal' range that will become the left child's 'preOrderTraversal' 
  const preOrderLeft = preOrder.slice(0, inOrderLeft.length);
  const preOrderRight = preOrder.slice(inOrderLeft.length);

  // recursively build tree for left and right children
  root.left = buildTree(preOrderLeft, inOrderLeft);
  root.right = buildTree(preOrderRight, inOrderRight);

  return root;
};

//      1
//    2   3
//   4 5

// console.log(buildTree([1, 2, 4, 5, 3], [4, 2, 5, 1, 3]));

//      3
//    9   20
//   1   15 7
//  7

console.log(buildTree([3, 9, 1, 7, 20, 15, 7], [7, 1, 9, 3, 15, 20, 7]));