const maxSubArrayIter = (nums) => {
  let contigSum = 0;
  let max = nums[0];
  for (let num of nums) {
    if (contigSum < 0) {
      contigSum = num;
    } else {
      contigSum += num;
    }
    if (contigSum > max) {
      max = contigSum;
    }
  }
  return max;
};

// divide and conquer approach

const maxSubArray = (arr) => {
  const maxObj = { max: 0 };
  rec(arr, 0, maxObj, arr.length - 1);
  return maxObj.max;
};

const rec = (arr, total, maxObj, idx) => {
  console.log({idx});
  if (idx < 0) return;

  rec(arr, total + arr[idx], maxObj, idx - 1);
  rec(arr, total, maxObj, idx - 1);

  if (total + arr[idx] > maxObj.max) {
    maxObj.max = Math.max(maxObj.max, total);
    console.log({max: maxObj.max});
  } 
};

console.log(maxSubArray([1,2,3,4]));