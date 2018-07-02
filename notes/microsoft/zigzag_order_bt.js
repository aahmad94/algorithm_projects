var zigzagLevelOrder = function (root) {
  const traversal = [];
  const queue = [root];
  let level = 0;
  let levelSize = 0;
  let queueNodeCt = root ? 1 : 0;
  while (queueNodeCt > 0) {
    const node = queue.shift();
    if (node) {
      queueNodeCt--;
      if (traversal[level]) {
        if (level % 2 === 0) {
            traversal[level].push(node.val);
        } else if (level % 2 === 1) {
            traversal[level].unshift(node.val);
        } 
        levelSize++;
      } else {
        traversal[level] = [node.val];
        levelSize++;
      }
    }
    if (levelSize >= Math.pow(2, level)) {
      level++;
      levelSize = 0;
    }
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
      if (node.left) queueNodeCt++;
      if (node.right) queueNodeCt++;
    } else {
      queue.push(null);
      queue.push(null);
    }
  }
  return traversal;
};