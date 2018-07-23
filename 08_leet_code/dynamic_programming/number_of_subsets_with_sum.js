// const numOfSubsets = (nums, target) =>  {
//   let ct = 0;
//   const ctNumOfSubsets = (nums, target) => {
//     if (nums.length === 0) return [[]];
//     const first = nums[0];
//     let sets = ctNumOfSubsets(nums.slice(1), target);
//     let newSets = sets.map(set => [first].concat(set));

//     newSets.forEach(set => {
//       const targetOfSet = set.reduce((acc, curr) => acc + curr);
//       if (targetOfSet === target) ct++;
//     });
//     return sets.concat(newSets);
//   };
//   ctNumOfSubsets(nums, target);
//   return ct;
// };

// const nums = [2, 4, 6, 10];
// const target = 16;
// console.log(numOfSubsets(nums, target));



const countSets = (arr, total) => {
  return rec(arr, total, arr.length - 1);
};

// --- problem is there will be n! recurive calls ---

const rec = (arr, total, i) => {
  if (total === 0) return 1;
  if (total < 0) return 0;
  if (i < 0) return 0;
  // when el is larger than sum, don't include it in any sets
  if (arr[i] > total) {
    return rec(arr, total, i - 1);
  } else {
    return (
      // go through all subsets 
      rec(arr, total - arr[i], i - 1) + 
      rec(arr, total, i - 1)
    );
  }
};

// --- dp says let's store return values of some of those calls 
// memoized soln below ---

const sets_dp = (arr, total) => {
  const mem = {}; 
  return dp(arr, total, arr.length - 1, mem);
};

const dp = (arr, total, i, mem) => {
  let toReturn;
  const key = `${total}:${i}`;

  if (mem[key]) {
    return mem[key];
  }

  if (total === 0) return 1;
  if (total < 0) return 0;
  if (i < 0) return 0;
  // with dp we only call the below conditional n times
  if (arr[i] > total) {
    toReturn = dp(arr, total, i - 1, mem);
  } else {
    toReturn = (
      rec(arr, total - arr[i], i - 1, mem) +
      rec(arr, total, i - 1, mem)
    );
  }
  mem[key] = toReturn;
  return toReturn;
};

console.log(countSets([4, 1, 10, 12, 5, 2], 9));