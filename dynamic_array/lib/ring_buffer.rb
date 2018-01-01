require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @store = StaticArray.new(0)
    @length = 0
    @capacity = 8
    @start_idx = 8
  end

  # O(1)
  def [](index)
    if self.length < (index + 1)
      raise "index out of bounds"
    else
      @store[(@start_idx + index) % capacity]
    end
  end

  # O(1)
  def []=(index, val)
    store[index] = value
  end

  # O(1)
  def pop
  end

  # O(1) ammortized
  def push(val)
  end

  # O(1)
  def shift
  end

  # O(1) ammortized
  def unshift(val)
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
  end

  def resize!
  end
end
