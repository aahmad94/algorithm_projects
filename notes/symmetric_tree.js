var isSymmetric = (root) => {
  const pre = [];
  let post = [];

  preOrder(root, pre);
  postOrder(root, post);

  post = post.reverse();

  return pre.every((el, idx) => pre[idx] === post[idx])
};

const preOrder = (node, pre) => {
  if (node) {
    pre.push(node.val);
  }

  if (node && node.left) {
    preOrder(node.left, pre);
  }


  if (node && node.right) {
    preOrder(node.right, pre);
  }

}

const postOrder = (node, post) => {
  // console.log({node});

  if (node && node.left) {
    postOrder(node.left, post);
  }


  if (node && node.right) {
    postOrder(node.right, post);
  }

  if (node) {
    post.push(node.val)
  }
} 