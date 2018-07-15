Array.prototype.mergeSort = function() {
  if (this.length <= 1) {
    return this;
  }
  const midPoint = Math.floor(this.length / 2);
  const sortedLeft = this.slice(0, midPoint).mergeSort();
  const sortedRight = this.slice(midPoint).mergeSort();
  return Array.merge(sortedLeft, sortedRight);
};

Array.merge = function(left, right) {
  const merged = [];
  while (left[0] && right[0]) {
    switch (left[0] <= right[0]) {
      case true: 
        merged.push(left.shift());
        break;
      case false:
        merged.push(right.shift());
        break;
    }
  }
  // concat does not mutate the object it was called on
  return merged.concat(left).concat(right);
};

console.log([3,2,9,8,1,3,8,13,27,15].mergeSort());