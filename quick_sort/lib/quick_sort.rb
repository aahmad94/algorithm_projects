class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array, &prc)
    prc ||= proc { |a, b| a <=> b }
    return array if array.length < 2

    pivot = array.first
    left = array[1..-1].select { |el| prc.call(el, pivot) == -1 }
    right = array[1..-1].select { |el| prc.call(el, pivot) != -1 }
    
    self.sort1(left, &prc) + [pivot] + self.sort1(right, &prc)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    prc ||= proc { |a, b| a <=> b }

    if length > 1
      pivot_idx = self.partition(array, start, length, &prc)
      
      # because pivot_idx is rand, we have recursive calls made that cover the entire range of the array
      self.sort2!(array, start, pivot_idx - start, &prc)
      self.sort2!(array, pivot_idx + 1, length - 1 - pivot_idx, &prc)
    end 
    
    array
  end

  def self.partition(array, start, length, &prc)
    prc ||= proc { |a, b| a <=> b }

    pivot = array[start]
    pivot_idx = start

    # start + 1 because we onlly deal with the pivot val's position at the end of the partition
    (start + 1..start + length - 1).each do |idx|
      # if array[idx] val < pivot val, swap items and move barrier (pivot_idx) up one 
      if prc.call(pivot, array[idx]) == 1 
        array[pivot_idx + 1], array[idx] = array[idx], array[pivot_idx + 1]
        pivot_idx += 1
      end 
    end 

    # swap pivot directly to the left of where the barrier now is (pivot_idx) to put pivot at it's correct index 
    array[pivot_idx], array[start] = array[start], array[pivot_idx]
    pivot_idx
  end
end