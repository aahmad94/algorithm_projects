const isUniValTree = (node, rootVal = null) => {
  if (!node) return true;
  let bool = true;

  if (typeof(rootVal) === 'number' && node.val !== rootVal) {
    bool = false;
  }

  return bool && isUniValTree(node.left, node.val) || isUniValTree(node.right, node.val);
};

const countUnivalTree = (root) => {
  const map = {};
  const props = {
    count: 0
  };
  rec(root, map, props);
  return map.count;
};

const rec = (root, map, props) => {
  if (!root) return;

  rec(root.left, map);
  rec(root.right, map);

  if (typeof(map[root]) === 'boolean' && map[root]) {
      props.count++;
  } else {
    map[root] = isUniValTree(root, map, props);
  }
};