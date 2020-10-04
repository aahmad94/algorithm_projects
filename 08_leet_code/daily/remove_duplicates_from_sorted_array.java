class Solution {
    public int removeDuplicates(int[] nums) {
        int i = 0;
        int j = 1;
        int x = Integer.MIN_VALUE;
        
        while (j < nums.length- 1) {
            // adjacent numbers are different
            if (nums[i] != nums[j]) {
                if (i < x) {
                    nums[i] = x;
                    x = Integer.MIN_VALUE;
                }
                i++;
                j++;
                
            // more than 1 duplicate ahead
            } else if (nums[j] == nums[j + 1]) {
                x = nums[j];
                j++;
            
            // only 1 duplicate ahead
            } else {
                nums[i+1] = nums[j + 1];
                i++;
                j++;
            }   
        }
        
        i++;
        
        while (i < nums.length) {
            nums[i] = 0;
            i++;
        }
        
        return nums.length;
    }
}