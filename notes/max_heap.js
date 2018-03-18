class MaxHeap {
  constructor() {
    this.store = [];
  }

  peek() {
    if (this.store.length === 0) { throw "no element to peek"; }
    return this.store[0];
  }

  extract() {
    if (this.store.length === 0) {
      throw "no element to extract";
    }
    const val = this.store[0];
    if (this.store.length > 1) {
      this.store[0] = this.store.pop();
      MaxHeap.heapifyDown(this.store, 0);
    } else {
      this.store.pop();
    }

    return val;
  }

  add(val) {
    this.store.push(val);
    MaxHeap.heapifyUp(this.store, this.store.length - 1);
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
      swapIdx = children[0] >= children[1] ? rightChildIdx : leftChildIdx;
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

module.exports = MaxHeap;