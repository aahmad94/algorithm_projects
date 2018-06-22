const findShortestSubArray = (arr) => {
  const firstIndicies = {};
  const lastIndicies = {};
  const counts = {};
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const j = arr[i];
    counts[j] = (counts[j] || 0) + 1;
    max = Math.max(max, counts[j]);
    if (firstIndicies[j] === undefined) {
      firstIndicies[j] = i;
    }
    lastIndicies[j] = i;
  }
  let ans = arr.length;
  for (const j in counts) {
    if (counts[j] === max) {
      ans = Math.min(ans, lastIndicies[j] - firstIndicies[j] + 1);
    }
  }
  return ans;
};


// initial soln (time complexity: O(n), space complexity O(n))
// var findShortestSubArray = function (nums) {
//   const map = {};
//   let degree;
//   const degreeNums = new Set();
//   let shortestLength = nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) {
//       map[nums[i]]++;
//     } else {
//       map[nums[i]] = 1;
//     }
//   }

//   degree = Math.max(...(Object.values(map)));

//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]] === degree) {
//       degreeNums.add(nums[i]);
//     }
//   }

//   for (let degreeNum of degreeNums) {
//     shortestLength = Math.min(shortestLength, findShortestSubArrayOfNum(nums, degree, degreeNum));
//   }

//   return shortestLength;
// };

// const findShortestSubArrayOfNum = (nums, degree, degreeNum) => {
//   let shortestLength = nums.length;
//   let currCt = 0;
//   for (let i = 0, j = 0; j < nums.length;) {
//     if (nums[j] === degreeNum) {
//       currCt++;
//       if (currCt === degree) {
//         shortestLength = Math.min(shortestLength, j - i + 1);
//         while (nums[i] !== degreeNum) {
//           i++;
//           shortestLength = Math.min(shortestLength, j - i + 1);
//         }
//       }
//     }
//     j++;
//   }
//   return shortestLength;
// };