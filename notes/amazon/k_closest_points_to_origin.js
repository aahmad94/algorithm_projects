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
    this.store = [1];
    this.callback = (el1, el2) => {
      if (el1 < el2) {
        return -1;
      } else if (el1 === el2) {
        return 0;
      } else {
        return 1;
      }
    };
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
}

const test = new MaxHeap();
// console.log({test});
// console.log(test.extract());
console.log(MaxHeap.test());