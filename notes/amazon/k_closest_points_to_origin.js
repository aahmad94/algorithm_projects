const kClosestPts = (pts) => {
  let ptsWithDistance = [];
  pts.forEach(pt => {
    const x = pt[0];
    const y = pt[1];
    const c = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), (1/2));
    ptsWithDistance.push({ coords: pt, distance: c });
  });
  return ptsWithDistance.sort((a, b) => {
    return a.distance > b.distance;
  });
};

// console.log(kClosestPts([[3, 5], [1, 2], [3, 4]]));

class MaxHeap {
  constructor() {
    this.store = [];
  }

  count() {
    return this.store.length;
  }

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


  peek() {
    if (this.count() === 0) {
      throw "no element to peek";
    }
    return this.store[0];
  }

  add(val) {
    this.store.push(val);
    MaxHeap.heapifyUp(this.store, this.count() - 1);
  }

  static childIndicies(len, parentIdx) {
    return [2 * parentIdx + 1, 2* parentIdx + 2].filter(idx => (idx < len));
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
    const parentVal = arr[parentIdx];
    const children = [];
    if (leftChildIdx) { children.push([arr[leftChildIdx]]); }
    if (rightChildIdx) { children.push([arr[rightChildIdx]]); }
    if (children.every(child => (child <= arr[parentIdx]))) {
      return arr;
    }
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
      if (childIdx > 0) {
        parentIdx = MaxHeap.parentIdx(childIdx);
      }
    }
  }
}

const heap = new MaxHeap();
heap.add(1);
heap.add(3);
console.log({heap});
heap.extract();
console.log(heap);
heap.add(3);
heap.add(7);
heap.add(9);
heap.add(12);
heap.add(15);
console.log({heap});