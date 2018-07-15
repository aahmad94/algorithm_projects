const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivotIdx = Math.round((arr.length - 1) * Math.random());
  const pivot = arr[pivotIdx];
  const arrNoPivot = arr.slice(0, pivotIdx).concat(arr.slice(pivotIdx + 1));

  const left = quickSort(arrNoPivot.filter(num => num <= pivot));
  const right = quickSort(arrNoPivot.filter(num => num > pivot));
  return left.concat([pivot], right);
};

const arr = [20, 100, 72, 92, 22, 21, 2];
console.log(quickSort(arr));

// space: O(n * log(n) / 2)
// time: O(n * log(n)) -- average case
// time O(n * (n - 1) / 2) = O(n^2)  -- worst case, when pivot doesn't change
// and input is reverse sorted 