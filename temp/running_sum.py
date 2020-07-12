# [1, 2, 3, 4, 5] -> 15

def runningSum(vols):
    sumToReturn = 0
    for vol in vols:
        sumToReturn = sumToReturn + vol
    return sumToReturn

def main():
    return runningSum([1, 2, 3, 4, 5]) + runningSum([6, 7, 8, 9, 10])

print(main())