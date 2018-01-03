class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    @prev.next = @next
    @next.prev = @prev
  end
end

class LinkedList
  def initialize
    @head_dummy = Node.new
    @tail_dummy = Node.new
    @head_dummy.next = @tail_dummy
    @tail_dummy.prev = @head_dummy
  end

  include Enumerable

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head_dummy.next
  end

  def last
    @tail_dummy.prev
  end

  def empty?
    @head_dummy.next == @tail_dummy &&
    @tail_dummy.prev == @head_dummy
  end

  def get(key)
    current_node = @head_dummy.next
    while current_node != @tail_dummy
      return current_node.val if current_node.key == key
      current_node = current_node.next
    end
  end

  def include?(key)
    current_node = first
    while current_node != @tail_dummy
      return true if current_node.key == key
      current_node = current_node.next
    end
    false
  end

  def append(key, val)
    new_node = Node.new(key, val)
    last_node = last

    last_node.next = new_node
    new_node.prev = last_node

    @tail_dummy.prev = new_node
    new_node.next = @tail_dummy
  end

  def update(key, val)
    current_node = first
    while current_node != @tail_dummy
      if current_node.key == key
        return current_node.val = val
      end
      current_node == current_node.next
    end
  end

  def remove(key)
    current_node = first
    while current_node != @tail_dummy
      if current_node.key == key
        current_node.prev.next = current_node.next
        current_node.next.prev = current_node.prev
      end
      current_node = current_node.next
    end
    nil
  end

  def each(&prc)
    current_node = first
    while current_node != @tail_dummy
      prc.call(current_node)
      current_node = current_node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end