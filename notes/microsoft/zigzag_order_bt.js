// BFS approach
var zigzagLevelOrderBFS = function (root) {
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
      } else {
        traversal[level] = [node.val];
      }
    }

    levelSize++;

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

// BFS time complexity here is O(2^n) (n is levels in BT input) since 
// we determine what level we're on by levelSize --
// our queue has to hold null values for the full BT 

const zigzagLevelOrder = function (root) {
  const traversal = [];
  if (!root) return traversal;
  const level = 0;
  dfs(root, level, traversal);
  return traversal;
};

const dfs = (root, level, traversal) => {
  if (!root) return;
  if (traversal[level]) {
    if (level % 2 === 0) {
      traversal[level].push(root.val); 
    } else {
      traversal[level].unshift(root.val);
    }
  } else {
    traversal[level] = [root.val];
  }
  dfs(root.left, level + 1, traversal);
  dfs(root.right, level + 1, traversal);
};

// pre order DFS traversal
// time complexity: O(n) 
// space complexity: O(n) - traversal output array
// the dfs only takes up O(nlog(n)) space 
// (n is number of nodes)
