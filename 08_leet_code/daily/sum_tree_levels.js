// Given a tree storing integer values, find the sum of values at a given level in a tree:

const sumTreeLevel = (root, level) => {
  if (level < 0) return 0;
  const map = {};

  dfs(root, 0, level, map);
  if (map[level]) {
    for (let i = 0; i < map[level].length; i++) {
      map[level] += map[level[i]];
    }
  }
};

const dfs = (root, currLevel, level, map) => {
  if (!root) {
    return null;
  }

  if (currLevel === level) {
    if (map[level]) {
      map[level].push(root.val);
    } else {
      map[level] = [root.val];
    }
  }
  if (currLevel < level) {
    for (let i = 0; i < root.children.length; i++) {
      const child = root.children[i];
      dfs(child, currLevel + 1, level, map);
    }
  }
};


const Node = function (val) {
  this.val = val;
  this.children = [];
};
