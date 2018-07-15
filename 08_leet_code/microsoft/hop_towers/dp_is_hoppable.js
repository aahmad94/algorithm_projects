const isHoppable = (arr) => {
  const path = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i + arr[i] > arr.length - 1) {
      path.push(i);
    } else if (path[path.length - 1] && i + arr[i] >= path[path.length - 1]) {
      path.push(i);
    }
  }
  return path[path.length - 1] === 0 ? true : false;
};

console.log(isHoppable([4, 2, 0, 0, 2, 0]), "this should be true");
console.log(isHoppable([4, 2, 0, 0, 1, 0]), "this should be false");
console.log(isHoppable([1, 3, 0, 0, 2, 0]), "this should be true");