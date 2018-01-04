class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = Array.new
    @prc = prc
  end

  def count
    @store.length
  end

  def extract
    first = @store[0]
    last = @store[-1]
    @store[0] = last 
    @store[-1] = first 

    popped = @store.pop 
    popped
  end

  def peek
  end

  def push(val)
  end

  public
  def self.child_indices(len, parent_index)
    result = []
    result.push(parent_index * 2 + 1) if (parent_index * 2 + 1) < len
    result.push(parent_index * 2 + 2) if (parent_index * 2 + 2) < len
    result
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc ||= Proc.new { |x, y| x <=> y }
    child_indices = self.child_indices(len, parent_idx)


    while (child_indices[0] && prc.call(array[parent_idx], array[child_indices[0]]) == 1) || 
          (child_indices[1] && prc.call(array[parent_idx], array[child_indices[1]]) == 1)

      if !child_indices[1] || prc.call(array[child_indices[0]], array[child_indices[1]]) == -1
        array[parent_idx], array[child_indices[0]] = array[child_indices[0]], array[parent_idx]
        parent_idx = child_indices[0]
      else
        array[parent_idx], array[child_indices[1]] = array[child_indices[1]], array[parent_idx]
        parent_idx = child_indices[1]
      end

      child_indices = self.child_indices(len, parent_idx)
    end

    array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
  end
end
