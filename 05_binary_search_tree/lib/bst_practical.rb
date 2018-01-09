require 'binary_search_tree'
def kth_largest(tree_node, k)
  tree = BinarySearchTree.new()
  kth_largest_value = tree.in_order_traversal(tree_node)[-k]
  tree.find(kth_largest_value, tree_node)
end
