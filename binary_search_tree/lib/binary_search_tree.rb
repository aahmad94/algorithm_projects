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

    if value <= current_node.value 
      current_node.left = BSTNode.new(value)
    else 
      current_node.right = BSTNode.new(value)
    end 
  end

  def find(value, tree_node = @root)
  end

  def delete(value)
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
  end

  def depth(tree_node = @root)
  end 

  def is_balanced?(tree_node = @root)
  end

  def in_order_traversal(tree_node = @root, arr = [])
  end


  private
  # optional helper methods go here:

end
