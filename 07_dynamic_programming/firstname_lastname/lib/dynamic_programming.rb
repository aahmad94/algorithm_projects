class DynamicProgramming

  def initialize
    @blair_cache = { 1 => 1, 2 => 2 }
    @frog_cache_top_down = [
      [],
      [[1]],
      [[1, 1], [2]],
      [[1, 1, 1], [1, 2], [2, 1], [3]],
    ]
  end

  def blair_nums(n)
    # return @blair_cache[n] if @blair_cache[n]
    # first = @blair_cache[n - 1] ? @blair_cache[n - 1] : blair_nums(n - 1)
    # second = @blair_cache[n - 2] ? @blair_cache[n - 2] : blair_nums(n - 2)
    # val = first + second + (n * 2 - 3)
    # @blair_cache[n] = val
    # val 

    # bottom_up dynamic programming approach
    blair_map = blair_nums_bottom_up(n)d
    blair_map[n]
  end

  def blair_nums_bottom_up(n)
    cache = { 1 => 1, 2 => 2 }
    return cache if n < 3 
    (3..n).each do |i|
      cache[i] = cache[i - 1] + cache[i - 2] + (i * 2 - 3)
    end
    cache
  end 

  def frog_hops_bottom_up(n)
    frog_cache_builder(n)
    @frog_cache[n]
  end

  def frog_cache_builder(n)
    @frog_cache = [
      [],
      [[1]],
      [[1, 1], [2]],
      [[1, 1, 1], [1, 2], [2, 1], [3]]
      # [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2], [1, 3], [3, 1]]
    ]

    (4..n).each do |num|
      past_jumps = @frog_cache[0...num].reduce(:+)
      # difference between num and the sum of a past jump must be <= 3 (frog can't jump more than 3 steps at a time) 
      filtered_jumps = past_jumps.select { |sub_arr| num - sub_arr.reduce(:+) <= 3 }
      @frog_cache[num] = filtered_jumps.map { |sub_arr| sub_arr + [num - sub_arr.reduce(:+)] } 
      end

    @frog_cache
  end

  def frog_hops_top_down(n)
    frog_hops_top_down_helper(n)
  end

  def frog_hops_top_down_helper(n)
    return @frog_cache_top_down[n] if @frog_cache_top_down[n]
    @frog_cache_top_down[n] = (0...n).map { |num| frog_hops_top_down_helper(num) }
      .reduce(:+)
      .select { |sub_arr| n - sub_arr.reduce(:+) <= 3 }
      .map { |sub_arr| sub_arr + [n - sub_arr.reduce(:+)] }
  end

  def super_frog_hops(n, k)

  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
