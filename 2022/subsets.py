import copy

class Solution1(object):
    def subsets(self, nums):
        if len(nums) < 1:
            return [[]]
        
        last = nums.pop()
        sets = self.subsets(nums)
        sets_copy = copy.deepcopy(sets)
        merged = []

        for subset in sets:
            subset.append(last)
            merged.append(subset)

        return sets_copy + merged

# w/o deep copy
# time complexity (n^2)
# space complexity O(n)
class Solution2(object):
    def subsets(self, nums):
        if len(nums) < 1:
            return [[]]
        
        last = nums.pop()
        sets = self.subsets(nums)
        merged = []
        
        return sets + map(lambda x: x + [last], sets)
