const numOfSubsets = (nums, sum) =>  {
  let ct = 0;
  const ctNumOfSubsets = (nums, sum) => {
    if (nums.length === 0) return [[]];
    const first = nums[0];
    let sets = ctNumOfSubsets(nums.slice(1), sum);
    let newSets = sets.map(set => [first].concat(set));

    newSets.forEach(set => {
      if (set.reduce((acc, curr) => acc + curr) === sum) ct++;
    });
    return sets.concat(newSets);
  };
  ctNumOfSubsets(nums, sum);
  return ct;
};

const nums = [2, 4, 6, 10];
const sum = 16;
console.log(numOfSubsets(nums, sum));
