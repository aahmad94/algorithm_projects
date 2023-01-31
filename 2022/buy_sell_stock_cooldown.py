# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        return self.rec(prices, 0, 'reset')

    # time complexity = 2^n
    # 3 states - reset (cooldown), buy, sell
    def rec(self, prices, i, state, *args):
        profit = 0

        if (i > len(prices) - 1):
            return profit

        if (state == 'reset'):
            profit += max(self.rec(prices, i, 'buy'), self.rec(prices, i+1, 'reset'))

        if (state == 'buy'):
            profit += self.rec(prices, i+1, 'sell', i)

        if (state == 'sell'):
            # when include, next state must reset and account for 1 day cooldown (i+2)
            include = (prices[i] - prices[args[0]]) + self.rec(prices, i+2, 'reset')
            not_include = self.rec(prices, i+1, 'sell', args[0])
            profit +=  max(include, not_include)
        
        return profit

class SolutionDP(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        sold, held, reset = float('-inf'), float('-inf'), 0

        for price in prices:

            pre_sold = sold
            sold = held + price
            held = max(held, reset - price)
            reset = max(reset, pre_sold)

        return max(sold, reset)