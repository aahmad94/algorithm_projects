class BSTNode
  attr_reader :value, :left, :right
  attr_accessor :parent

  def initialize(value)
    @value = value
  end

  def rel_pos
    return nil unless parent
    parent.left == self ? 'left' : 'right'
  end

  def left=(node)
    @left = node
      node.parent = self if node
  end

  def right=(node)
    @right = node
      node.parent = self if node
  end

  def child_nodes
    child_nodes = []
    child_nodes << @left if @left
    child_nodes << @right if @right
    child_nodes
  end
  
  def count
    child_nodes.length
  end 

  def first_child
    return @left if @left
    return @right if @right
    nil
  end

  # def <=>(other_node)
  #   @value <=> other_node.value
  # end
end