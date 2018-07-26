const subsets = (arr) => {
  const ans = [[]];
  rec(arr, ans, arr.length - 1);
  return ans;
};

const rec = (arr, ans, idx) => {
  if (idx < 0) return;

  ans.push(arr.slice(idx));

  rec(arr.slice(0, idx), ans, idx - 1);
  rec(arr, ans, idx - 1);
};

// console.log(subsets([1,2,3]));
console.log(subsets([1,2,3,4]));