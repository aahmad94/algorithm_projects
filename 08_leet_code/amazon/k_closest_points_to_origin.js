var MaxHeap = require('../max_heap.js');

const kClosestPts = (pts, k) => {
  let ptsWithDistance = [];
  pts.forEach(pt => {
    const x = pt[0];
    const y = pt[1];
    const c = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), (1 / 2));
    ptsWithDistance.push({
      coords: pt,
      distance: c
    });
  });

  // intialize maxHeap with objects in ptsWithDistance array
  const maxHeap = new MaxHeap();
  for (let i = 0; i < k; i++) { maxHeap.add(ptsWithDistance[i]); }

  // if obj.distance > maxHeap root val, add obj (heapifyup) 
  // and extract root (swap with last item in store and heapify down)
  ptsWithDistance.forEach(obj => {
    if (obj.distance < maxHeap.peek().distance) {
      maxHeap.add(obj);
      maxHeap.extract();
    }
  });
  return maxHeap.store;
};

console.log(kClosestPts([[-2, 4], [0, -2], [-1, 0], [3,5], [-2,-3],[3,2]], 3));