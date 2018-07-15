class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  isBST(root = this, min = null, max = null) {
    if (!root) return true;
    if (max && root.val > max) return false;
    if (min && root.val < min) return false;
    return this.isBST(root.left, min, root.val) &&
      this.isBST(root.right, root.val, max);
  }
}

// create BST for tests
const root1 = new Node(5);
root1.left = new Node(3);
root1.right = new Node(9);

root1.left.left = new Node(2);
root1.left.right = new Node(4);

root1.right.left = new Node(6);
root1.right.right = new Node(10);

// create BST for tests
const root2 = new Node(5);
root2.left = new Node(3);
root2.right = new Node(9);

root2.left.left = new Node(2);
root2.left.right = new Node(4);

root2.right.left = new Node(4); // this is less than passed down min val (5), false 
root2.right.right = new Node(10);

// these should all log true;
console.log(root1.isBST() === true);
console.log(root2.isBST() === false);