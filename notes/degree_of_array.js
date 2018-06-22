const findShortestSubArray1 = (arr) => {
  const firstIndicies = {};
  const lastIndicies = {};
  const counts = {};
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const chr = arr[i];
    counts[chr] = (counts[chr] || 0) + 1;
    max = Math.max(max, counts[chr]);
    if (firstIndicies[chr] === undefined) {
      firstIndicies[chr] = i;
    }
    lastIndicies[chr] = i;
  }
  let ans = arr.length;
  for (const chr in counts) {
    if (counts[chr] === max) {
      ans = Math.min(ans, lastIndicies[chr] - firstIndicies[chr] + 1);
    }
  }
  return ans;
};


// initial soln (time complexity: O(n), space complexity O(n))
var findShortestSubArray2 = function (nums) {
  const map = {};
  let degree;
  const degreeNums = new Set();
  let shortestLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  degree = Math.max(...(Object.values(map)));

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === degree) {
      degreeNums.add(nums[i]);
    }
  }

  for (let degreeNum of degreeNums) {
    shortestLength = Math.min(shortestLength, findShortestSubArrayOfNum(nums, degree, degreeNum));
  }

  return shortestLength;
};

const findShortestSubArrayOfNum = (nums, degree, degreeNum) => {
  let shortestLength = nums.length;
  let currCt = 0;
  for (let i = 0, j = 0; j < nums.length;) {
    if (nums[j] === degreeNum) {
      currCt++;
      if (currCt === degree) {
        shortestLength = Math.min(shortestLength, j - i + 1);
        while (nums[i] !== degreeNum) {
          i++;
          shortestLength = Math.min(shortestLength, j - i + 1);
        }
      }
    }
    j++;
  }
  return shortestLength;
};