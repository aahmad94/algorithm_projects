# LC problem 875 
class Solution(object):
    def minEatingSpeed(self, piles, h):
        """
        :type piles: List[int]
        :type h: int
        :rtype: int
        """
        print('h ------ ' + str(h))
        l = min(piles)
        r = max(piles) 
        m = (l+r)/2 # m is the rate (bananas/hr) we will test
        ans = 1000000

        while(l <= r):
            test_h = 0
            for i in range(len(piles)):
                pile = piles[i]
                pile_h = pile/m 
                if (pile%m):
                    pile_h += 1
                test_h += pile_h

            if (test_h <= h):
                ans = m
                r = m - 1
            else:
                l = m + 1

            m = (r+l)/2

        return ans
            