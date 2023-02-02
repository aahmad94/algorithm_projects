# https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/

import heapq

class Solution(object):
    def maxEvents(self, events):
        """
        :type events: List[List[int]]
        :rtype: int
        """
        events.sort(key=lambda x: x[0]) # sort events wrt starttime (ascending)
        pq = [] # min heap to store endtime of open events
        count = 0
        i, n = 0, len(events)
        d = 0  # current day

        while i < n or pq:
            if not pq:
                d = events[i][0] # first day's starttime 

            # populate pq min heap w/ endtime for events that started <= d
            while i < n and events[i][0] <= d: 
                heapq.heappush(pq, events[i][1])
                i += 1

            # count event and increment day
            heapq.heappop(pq)
            count += 1
            d += 1

            # rm all events that had an endtime before d
            # (only one event per day) 
            while pq and pq[0] < d:
                heapq.heappop(pq)
        return count 
