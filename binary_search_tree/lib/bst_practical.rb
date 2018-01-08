
def kth_largest(tree_node, k)
  # both operations, traversal and look up are nlog(n)
  # 2nlog(n) => nlog(n) time complexity
  tree = tree_node.tree
  kth_largest_value = tree.in_order_traversal(tree_node)[-k]
  tree.find(kth_largest_value)
end
