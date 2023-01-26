class Solution(object):

    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        return self.rec(m, n, 0, 0)
        
    # time complexity: O(2^m*n)
    # space complexity: recursive stack
    def rec(self, m, n, r, c):
        if (r == m or c == n):
            return 0
        elif (r == (m-1) and c == (n-1)):
            return 1
        
        down = self.rec(m, n, r+1, c)
        right = self.rec(m, n, r, c+1)

        return down + right

    # time complexity: O(m*n)
    # space complexity: O(m*n) + O(m+n) (m+n representing depth of the recursion tree)
    def uniquePathsMemo(self, m, n): 
        memo = [[0 for i in range(n)] for j in range(m)]
        self.memo(m, n, 0, 0, memo)


    def memo(self, m, n, r, c, memo):
        if (r == m or c == n):
            return 0
        elif (r == (m-1) and c == (n-1)):
            return 1

        if memo[r][c]:
            return memo[r][c]
        
        down = self.memo(m, n, r+1, c, memo)
        right = self.memo(m, n, r, c+1, memo)
        memo[r][c] = down + right

        return down + right

    # time complexity: O(m*n)
    # space complexity: O(m*n) -- bottom up approach w/o recursive stack
    def uniquePathsTabulation(self, m, n): 
        dp = [[0 for x in range(n)] for y in range(m)]
        dp[m-1][n-1] = 1
        for x in range(m):
            r = m - 1 - x
            for y in range(n):
                c = n - 1 - y
                print('r, c' + ' --- ' + str(r) + ', ' + str(c))
                if r+1 < m:
                    dp[r][c] += dp[r+1][c]
                if c+1 < n:
                    dp[r][c] += dp[r][c+1] 
        return dp[0][0]