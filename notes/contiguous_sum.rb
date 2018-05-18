def sumSeq(nums, sum)

  currSum = 0
  startIdx = 0
  moveIdx = 0

  while (startIdx < nums.length)
    if currSum == sum
      return true 
    end  
 
    if moveIdx >= nums.length || currSum > sum
      currSum = 0
      startIdx += 1;
      moveIdx = startIdx;
    end 

    if currSum < sum
      currSum += nums[moveIdx] 
      moveIdx += 1
    end 
  end 

  return false
end 

p sumSeq([23, 5, 4, 7, 2, 11], 20) # true [7, 2, 11]
# p sumSeq([1, 3, 5, 23, 2], 8) # true [5, 8]
# p sumSeq([1, 3, 5, 23, 2], 7) # false