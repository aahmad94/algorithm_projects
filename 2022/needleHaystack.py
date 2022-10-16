# Given two strings needle and haystack, return the index of
# the first occurrence of needle in haystack, or -1 if needle
# is not part of haystack.

# time complexity = n(m-1) where n is length of the haystack
# and m is length of the needle
# evident in ex. w/ haystack = 'mississississississississippi',
# needle = 'issip'
def strStr(self, haystack: str, needle: str) -> int:
    ansIdx: int = -1
    for i in range(len(haystack)):
        if (haystack[i] == needle[0] and len(needle) <= len (haystack)): 
            j: int = i
            while(j-i < len(needle) and j < len(haystack)):
                print(j-i)
                if haystack[j] != needle[j-i]:
                    break
                if j-i == len(needle)-1:
                    return i;
                j = j+1
    return ansIdx
            
            
            