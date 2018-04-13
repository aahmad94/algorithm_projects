class BinaryMinHeap {
  constructor(comparator = null) {
    this.comparator = comparator;
    this.store = [];
    if (!this.comparator) {
      this.comparator = function(val1, val2) {
        if (val1 < val2) return -1;
        if (val1 === val2) return 0;
        if (val1 > val2) return 1;
      };
    }
  }

  insert(val) {
    this.store.push(val);
    this.heapifyUp(this.store.length - 1);
  }
  
  heapifyUp(childIdx) {

    while (childIdx > 0) {
      let parent = Math.floor((childIdx + 1) / 2) - 1;

      if (this.comparator(this.store[parent], this.store[childIdx]) === 1) {
        [this.store[parent], this.store[childIdx]] = [this.store[childIdx], this.store[parent]]; 
      }
      childIdx = parent;
    }
  }
  
  extractMin() {
    let min = this.store[0];
    this.store[0] = this.store.pop(); 
    this.heapifyDown(0);
    return min;
  }
  
  heapifyDown (parentIdx) {
    for(;;) {
      let swapIdx = null; 
      const childIndicies = [(parentIdx + 1) * 2 - 1, (parentIdx + 1) * 2];

      for (let i = 0; i < childIndicies.length; i++) {
        if (!swapIdx && this.store[childIndicies[i]] || this.store[childIndicies[i]] && this.store[swapIdx] &&
          this.comparator(this.store[childIndicies[i]], this.store[swapIdx]) === -1) {
          swapIdx = childIndicies[i];
        }
      }

      if (!swapIdx || this.comparator(this.store[parentIdx], this.store[swapIdx]) < 1) {
        break;
      }

      [this.store[parentIdx], this.store[swapIdx]] = [this.store[swapIdx], this.store[parentIdx]];
  
      parentIdx = swapIdx;
    }
  }
}

module.exports = BinaryMinHeap;