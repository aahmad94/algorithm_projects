const numWaysRec = (n, x = [0, 1]) => {
  if (n <= 1) return 1;
  return numWaysRec(n - 1) + numWaysRec(n - 2);
};

// time complexity: 2^steps

console.log(numWaysRec(4));
console.log(numWaysRec(5));
console.log(numWaysRec(6));
console.log(numWaysRec(7));

const numWaysIter = (n, x = [0, 1]) => {
  let first = 0;
  let second = 1;
  let stepsClimbed;

  for (let i = n; i > 0; i--) {
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
const numWaysIterImproved = (steps, stepSizes = [0, 1]) => {
  if (steps === 0) return 1;
  const nums = [1];
  for (let i = 0; i < steps; i++) {
    let total = 0;
    for (let j = 0; j < stepSizes.length; j++) {
      if ((i -stepSizes[j]) >= 0)  {
        total += nums[i - stepSizes[j]];
      }
    }
    nums.push(total);
  }
  return nums[steps];
};

console.log(numWaysIterImproved(4, [0, 1, 2]));
console.log(numWaysIterImproved(5));
console.log(numWaysIterImproved(6));
console.log(numWaysIterImproved(7));