// Below only checks if both all subnode's children are the same
// NOT whether L & R child specifically are the same

// var isSymmetric = (root) => {
//   const pre = [];
//   let post = [];

//   preOrder(root, pre);
//   postOrder(root, post);

//   post = post.reverse();

//   return pre.every((el, idx) => pre[idx] === post[idx])
// };

// const preOrder = (node, pre) => {
//   if (node) {
//     pre.push(node.val);
//   }

//   if (node && node.left) {
//     preOrder(node.left, pre);
//   }


//   if (node && node.right) {
//     preOrder(node.right, pre);
//   }

// }

// const postOrder = (node, post) => {
//   // console.log({node});

//   if (node && node.left) {
//     postOrder(node.left, post);
//   }


//   if (node && node.right) {
//     postOrder(node.right, post);
//   }

//   if (node) {
//     post.push(node.val)
//   }
// } 

// Full soln:
const isSymmetric = (root) => {
  return isMirror(root, root);
};

const isMirror= (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;
  return (node1.val === node2.val) && isMirror(node1.right, node2.left) && isMirror(node1.left, node2.right);
};