var connect = function (root) {
  if (!root) return;
  const props = {
    count: 0,
    level: 1
  };
  bfs(root, props);
  console.log(root);
};

const bfs = (root, props) => {
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    props.count++;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    node.next = queue[0];
    if (props.count === 1 || props.count === (Math.pow(2, props.level) - 1)) {
      // console.log({val : node.val})
      node.next = null;
      props.level++;
    }
  }
};