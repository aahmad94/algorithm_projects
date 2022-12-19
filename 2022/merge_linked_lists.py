# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """ 
        head = list1 if list1 and list2 and list1.val <= list2.val else list2
        
        while(list1 and list2):
            list1_next = list1.next
            list2_next = list2.next

            if (list1.val <= list2.val):
                list1.next = list2
                list2.next = list1_next
            else:
                list2.next = list1
                list1.next = list2_next

            list1 = list1_next
            list2 = list2_next
        return head