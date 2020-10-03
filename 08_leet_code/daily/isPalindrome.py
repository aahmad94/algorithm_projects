class Solution:
    def isPalindrome(self, x: int) -> bool:
        xList: List[int] = list(map(int, str(x)))

        for i in range(len(xList)):
            j = len(xList) - 1 - i
            
            if xList[i] != xList[j]:
                return False
        
        return True