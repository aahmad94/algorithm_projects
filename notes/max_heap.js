class MaxHeap {
  constructor() {
    this.store = [];
  }

  count() {
    return this.store.length;
  }
  peek() {
    if (this.count() === 0) { throw "no element to peek"; }
    return this.store[0];
  }

  // extract time complexity ~= O(log(n))
  // heapify down will make stack depth number (log(n)) of comparisons at most 
  extract() {
    if (this.count() === 0) {
      throw "no element to extract";
    }
    const val = this.store[0];
    if (this.count() > 1) {
      this.store[0] = this.store.pop();
      MaxHeap.heapifyDown(this.store, 0);
    } else {
      this.store.pop();
    }

    return val;
  }

  // add time complexity ~= O(log(n)) 
  // heapify up will make stack depth number (log(n)) of comparisons at most 
  add(val) {
    this.store.push(val);
    MaxHeap.heapifyUp(this.store, this.count() - 1);
  }

  // static helper methods

  static childIndicies(len, parentIdx) {
    return [2 * parentIdx + 1, 2 * parentIdx + 2].filter(idx => (idx < len));
  }

  static parentIdx(childIdx) {
    if (childIdx === 0) {
      throw "root has no parent";
    }
    return Math.floor(childIdx - 1 / 2);
  }

  static heapifyDown(arr, parentIdx, len = arr.length) {
    let leftChildIdx, rightChildIdx;
    [leftChildIdx, rightChildIdx] = MaxHeap.childIndicies(len, parentIdx);

    const children = [];
    if (leftChildIdx) { children.push([arr[leftChildIdx]]); }
    if (rightChildIdx) { children.push([arr[rightChildIdx]]); }
    if (children.every(child => (child <= arr[parentIdx]))) { return arr; }

    let swapIdx;
    if (children.length === 1) {
      swapIdx = leftChildIdx;
    } else {
      swapIdx = children[0] > children[1] ? leftChildIdx : rightChildIdx;
    }

    [arr[parentIdx], arr[swapIdx]] = [arr[swapIdx], arr[parentIdx]];
    return MaxHeap.heapifyDown(arr, swapIdx, len);
  }

  static heapifyUp(arr, childIdx, len = arr.length) {
    if (childIdx === 0) { return arr; }
    let parentIdx = MaxHeap.parentIdx(childIdx);
    while (childIdx > 0 && arr[parentIdx] < arr[childIdx]) {
      [arr[parentIdx], arr[childIdx]] = [arr[childIdx], arr[parentIdx]];
      childIdx = parentIdx;
      if (childIdx > 0) { parentIdx = MaxHeap.parentIdx(childIdx); }
    }
  }
}

// heapSort time complexity ~= O(nlog(n))
Array.prototype.heapSort = function() {
  const heap = new MaxHeap();
  while (this.length > 0) {
    heap.add(this.pop());
  }
  while (heap.count() > 0) {
    this.unshift(heap.extract());
  }
  return this;
};

// module.exports = MaxHeap;
console.log([5, 9, 8, 2, 4, 1, 3].heapSort());