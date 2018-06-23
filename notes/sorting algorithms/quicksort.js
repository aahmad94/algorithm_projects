const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const left = quickSort(arr.slice(1).filter(num => num <= arr[0]));
  const right = quickSort(arr.slice(1).filter(num => num > arr[0]));
  return left.concat([arr[0]], right);
};