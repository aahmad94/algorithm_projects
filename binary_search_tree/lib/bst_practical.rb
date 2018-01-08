
def kth_largest(tree_node, k)
  kth_largest_value = tree_node.in_order_traversal(tree_node)[-k]
  tree_node.find(kth_largest_value)
end
