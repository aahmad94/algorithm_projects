class Solution(object):

    parenthesis = []

    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        self.recurse(n, 1, 0, '(')
        return self.parenthesis

    def recurse(self, n, l, r, str):
        if len(str) == n*2:
            self.parenthesis.append(str)
            
        if (l<n):
            self.recurse(n, l+1, r, str + '(')
            
        if (r<l):
            self.recurse(n, l, r+1, str + ')')