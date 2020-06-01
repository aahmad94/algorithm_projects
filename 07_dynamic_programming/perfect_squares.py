# Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

class Solution(object):
    def numSquares(self, n):
        """
        :type n: int
        :rtype: int
        """
        dp = []
        perfSqs = []
        for i in range(n + 1):
            if (i > 1 and i**2 <= n):
                perfSqs.append(i**2)
            dp.append(i)

        
        for i in dp:
            for sq in perfSqs:
                if (i >= sq):
                    dp[i] = min(dp[i], dp[i - sq] + 1)
        
        return dp[len(dp) - 1]