# LC #146 

Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# map nodes to an array w/ next value set to None 
# node at idx 0 should map to node at index len-1
# time - O(n)
# space - O(n^2)
class Solution1(object):
    def reorderList(self, head):
        """
        :type head: ListNode
        :rtype: None Do not return anything, modify head in-place instead.
        """
        arr = []
        right = head

        # initialize right and arr 
        while (right):
            arr.append(right)
            right = right.next
            arr[-1].next = None

        return self.helper(arr)
    
    # each recursive calls stores array of n-2 where n is length of the array
    # from the calling fn, leading to (n/2) calls * avg. of (n/2) length
    # arrays or n^2 space complexity
    # could be optimized to O(n) if we use array indicies and pass same array
    # (pass by reference, see soln. 2 below)
    def helper(self, arr):
        if(len(arr) and len(arr) > 1): 
            arr[0].next = arr[len(arr)-1]
            arr[len(arr)-1].next = self.helper(arr[1:-1])
            return arr[0]
        elif len(arr):
            return arr[0]
        else:
            return None

# find the tail node O(n), assign head to tail
# recursively call fn w/ next head (node that prior tail would point to)
# and have the fn return the reordered list
# time - O(n^2) (scanning for tail at n recursive calls)
# space - O(n) head node is passed by reference
class Solution2(object):
    def reorderList(self, head):
        if not head or not head.next or not head.next.next:
            return head

        l_nxt = head.next
        adj_r_end = head
        r_end = head
        
        # initialize r_end
        while (r_end.next):
            adj_r_end = r_end
            r_end = r_end.next

        adj_r_end.next = None
        head.next = r_end
        r_end.next = self.reorderList(l_nxt) 

        return head
