const TreeNode = function(val) {
  this.left = null;
  this.right = null;
}

var serialize = function (root) {
  const preStore = [];
  preOrder(root, preStore);

  const inStore = [];
  inOrder(root, inStore);

  const serial = JSON.stringify({
    preStore,
    inStore
  });

  return serial;
};

const preOrder = (root, preStore) => {
  if (!root) return null;
  preStore.push(root.val);
  preOrder(root.left, preStore);
  preOrder(root.right, preStore);
};

const inOrder = (root, inStore) => {
  if (!root) return null;
  inOrder(root.left, inStore);
  inStore.push(root.val);
  inOrder(root.right, inStore);
};

var deserialize = function (data) {
  const {
    preStore,
    inStore
  } = JSON.parse(data);
  return buildBST(preStore, inStore);
};

const buildBST = (preStore, inStore) => {
  if (preStore.length === 1) return new TreeNode(preStore[0]);
  if (preStore.length === 0) return null;
  const root = new TreeNode(preStore.shift());

  const inPivot = inStore.indexOf(root.val);
  const inStoreLeft = inStore.slice(0, inPivot);
  const inStoreRight = inStore.slice(inPivot + 1);

  const preStoreLeft = preStore.slice(0, inStoreLeft.length);
  const preStoreRight = preStore.slice(inStoreLeft.length);

  root.left = buildBST(preStoreLeft, inStoreLeft);
  root.right = buildBST(preStoreRight, inStoreRight);

  return root;
}