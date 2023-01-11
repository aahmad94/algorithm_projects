def maxArea(self, heights):
        """
        :type heights: List[int]
        :rtype: int
        """
        max_area = 0
        l = 0
        r = len(heights) - 1
        
        while(r > l):
            dist = r - l
            height = min(heights[l], heights[r])
            area = dist * height
            max_area = area if area > max_area else max_area
 
            if heights[l] > heights[r]:
                r -= 1
            else:
                l += 1
                
        return max_area