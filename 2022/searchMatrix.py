class Solution(object):
    def searchMatrix(self, mtx, trgt):
        """
        :type matrix: List[List[int]]
        :type trgt: int
        :rtype: bool
        """
        r1, c1 = 0, 0
        r2, c2 = len(mtx) - 1, len(mtx[0]) - 1
        return self.bsearch(r1, c1, r2, c2, mtx, trgt)
    
    def bsearch(self, r1, c1, r2, c2, mtx, trgt):
        l_spaces = (len(mtx[0]) * r1) + (c1 + 1)
        r_spaces = (len(mtx[0]) * r2) + (c2 + 1)
        range_lr = r_spaces - l_spaces

        mid_c = c1 + (range_lr/2 % len(mtx[0]))
        mid_r = r1 + (range_lr/2 / len(mtx[0])) + (mid_c / len(mtx[0]))
        mid_c = mid_c % len(mtx[0])
        
        mid = mtx[mid_r][mid_c]
       
    
        if (trgt == mid):
            return True
        if (r1 == r2 and c1 == c2):
            return False
        elif (trgt < mid):
            return self.bsearch(r1, c1, mid_r, mid_c, mtx, trgt)
        elif (trgt > mid):
            mid_c = mid_c + 1
            mid_r = mid_r + mid_c/len(mtx[0])
            mid_c = mid_c % len(mtx[0])
            return self.bsearch(mid_r, mid_c, r2, c2, mtx, trgt)