# https://leetcode.com/problems/coin-change-ii/description/ 

# recursive
# time complexity - O(denominations^amt)
def numWays1(coins, amt):
    if amt == 0: return 1
    if amt < 0: return -1
    total = 0

    for i in range(len(coins)):
        coin = coins[i]
        if coin > amt:
            continue

        result = numWays1(coins[i:], amt-coin)
        if result: total += result

    return total

# recursive w/ memoization
# time complexity - O(denominations*amt)
def numWays2(self, coins, amt, memo=dict()):
    if amt == 0: return 1
    if amt < 0: return -1
    total = 0

    for i in range(len(coins)):
        coin = coins[i]
        key = (amt, coin)

        if key in memo and memo[key] > 0: 
            total += memo[key]
            continue

        if coin > amt:
            continue

        result = numWays2(coins[i:], amt-coin, memo)
        memo[key] = result

        if result > 0: 
            total += result

    return total

# dp
# time complexity - O(denominations*amt)
def numWays3(coins, amt): 
    totals = [0] * (amt + 1)
    totals[0] = 1
    for i in range(len(coins)):
        for j in range(coins[i], amt + 1):
            totals[j] += totals[j-coins[i]]
    return totals[amt]


