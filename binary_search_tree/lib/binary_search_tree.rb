# There are many ways to implement these methods, feel free to add arguments 
# to methods as you see fit, or to create helper methods.
require 'bst_node'

class BinarySearchTree
  attr_reader :root

  def initialize
    @root = nil
  end

  def insert(value)
    unless @root 
      @root= BSTNode.new(value)
      return @root 
    end  

    current_node = @root
    loop do
      if current_node.left && value <= current_node.value
        current_node = current_node.left
      elsif current_node.right && value > current_node.value 
        current_node = current_node.right
      else 
        break
      end 
    end 

    value <= current_node.value ? 
      current_node.left = BSTNode.new(value) :
      current_node.right = BSTNode.new(value)
  end

  def find(value, tree_node = @root)
    return tree_node if tree_node.value == value
    if value <= tree_node.value 
      return nil unless tree_node.left
      find(value, tree_node.left)
    else
      return nil unless tree_node.right
      find(value, tree_node.right)
    end 
  end

  def delete(value)
    target = self.find(value)
    target_position = "#{target.rel_pos}="
    parent = target.parent

    if target.count == 0
      # if no children
      # set target to nil if root, otherwise set itself to nil
      return @root = nil if target == @root
      parent.send(target_position, nil)
    elsif target.count == 1
      # if 1 child
      # set the target position equal to that of it's child
      parent.send(target_position, target.first_child)
    else
      # if 2 children:
      # pick the largest value from the left tree (lower val than parent)
      # if replacement has left child (only possibility), we want to append it directly to replacement's parent right branch
      replacement = maximum(target.left)
      replacement_parent = replacement.parent
      replacement_child = replacement.left
      replacement_parent.right = replacement_child
  
      # swap
      parent.send(target_position, replacement)
    end



  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    while tree_node.right 
      tree_node = tree_node.right 
    end
    tree_node
  end

  def depth(tree_node = @root)
    depth = 0 
    if tree_node.count > 0
      depth += 1
      tree_depths = tree_node.child_nodes.map do |child_node|
        depth(child_node)
      end
      depth += tree_depths.max 
    end 
    depth
  end 

  def is_balanced?(tree_node = @root)
    return true if depth(tree_node) <= 1
    left = depth(tree_node.left)
    right = depth(tree_node.right)
    difference = (left - right).abs 
    difference <= 1 && is_balanced?(tree_node.left) && is_balanced?(tree_node.right)
  end

  def in_order_traversal(tree_node = @root, arr = [])
    in_order_traversal(tree_node.left, arr) if tree_node.left
    arr << tree_node.value
    in_order_traversal(tree_node.right, arr) if tree_node.right

    arr
  end


  private
  # optional helper methods go here:

end
