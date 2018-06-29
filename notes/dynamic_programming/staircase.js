const numWaysRec = (n, x = [0, 1]) => {
  if (n <= 1) return 1;
  return numWaysRec(n - 1) + numWaysRec(n - 2);
};

// time complexity: 2^n

console.log(numWaysRec(4));
console.log(numWaysRec(5));
console.log(numWaysRec(6));
console.log(numWaysRec(7));

const numWaysIter = (n, x = [0, 1]) => {
  let first = 0;
  let second = 1;
  let stepsClimbed;

  for (let i = n - 1; i >= 0; i--) {
    stepsClimbed = first + second;
    first = second;
    second = stepsClimbed;
  }
  return stepsClimbed;
};

console.log(numWaysIter(4));
console.log(numWaysIter(5));
console.log(numWaysIter(6));
console.log(numWaysIter(7));


// dynamic programming
// time complexity O(n)
// space complexity: O(n)
const numWaysIterImproved = (n, stepSizes = [0, 1]) => {
  if (n === 0) return 1;
  const nums = [1];
  for (let stepSizeLimit = 0; stepSizeLimit < n; stepSizeLimit++) {
    let total = 0;
    for (let j = 0; j < stepSizes.length; j++) {
      if ((stepSizeLimit - stepSizes[j]) >= 0)  {
        total += nums[stepSizeLimit - stepSizes[j]];
      }
    }
    nums.push(total);
  }
  return nums[n];
};

console.log(numWaysIterImproved(4, [0, 1, 5]));
console.log(numWaysIterImproved(5));
console.log(numWaysIterImproved(6));
console.log(numWaysIterImproved(7));