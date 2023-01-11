# https://leetcode.com/problems/coin-change/

# greedy soln
# not optimal if the coin denominations are not in descending order
def greedyCoinChange(self, coins, amount):
    ct = 0
    for coin in coins:
        while coin <= amount:
            ct += 1
            amount -= coin
    if amount > 0:
        ct = -1
    return ct

# dynamic programming
def coinChange(self, coins, amt):
    table = [0] * (amt + 1)
    for i in range(len(table)):
        table[i] = float('inf')
    table[0] = 0

    for coin in coins:
        for i in range(coin, amt + 1):
            table[i] = min(table[i], table[i-coin] + 1)

    if table[amt] == float('inf'):
        return -1
        
    return table[amt]