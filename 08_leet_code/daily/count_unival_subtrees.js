const isUnival = (node, rootVal = null) => {
  if (!node) return true;
  let bool = true;

  if (typeof(rootVal) === 'number' && node.val !== rootVal) {
    bool = false;
  }

  return bool && isUnival(node.left, node.val) || isUnival(node.right, node.val);
};

const countUnival = (root) => {
  const map = {};
  const props = {
    count: 0
  };
  rec(root, map, props);
  return map.count;
};

const rec = (root, map, props) => {
  if (!root) return;

  rec(root.left, map, props);
  rec(root.right, map, props);

  if (typeof(map[root]) === 'boolean' && map[root]) {
      props.count++;
  } else {
    map[root] = isUnival(root);
    if (map[root]) props.count++; 
  }
};