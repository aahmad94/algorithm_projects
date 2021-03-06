require_relative "heap"
class Array
  def heap_sort!
    heap = BinaryMinHeap.new

    while self.length > 0
      heap.push(self.pop)
    end

    while heap.count > 0
      self << heap.extract
    end

    self
  end
end
