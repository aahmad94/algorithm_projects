const binarySearch = require("./binary_search");

const shortestPath = (routes, S, T) => {
  if (S === T) return 0;

  const queue = [];
  const seen = new Set();
  const targets = new Set();

  const N = routes.length;
  const map = [];

  // sort every sub arr in routes
  // initialize map w/ N buckets
  for (let i = 0; i < N; i++) {
    routes[i].sort();
    map.push([]);
  }
  
  // map indicies represent busses
  // map vals represent busses that intersect (have at least one common route)
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (intersect(routes[i], routes[j])) {
        map[i].push(j);
        map[j].push(i);
      }
    }
  }

  // find which bus has (routes idx) has starting route
  // find all busses that will visit our target destination and put them in a set
  for (let i = 0; i < N; i++) {
    if (binarySearch(routes[i], S) >= 0) {
      seen.add(i);
      queue.push([i, 0]);
    }
    if (binarySearch(routes[i], T) >= 0) targets.add(i);
  }


  while (queue.length > 0) {
    const dequeued = queue.pop();
    const bus = dequeued[0];
    const depth = dequeued[1];
    if (targets.has(bus)) {
      return depth + 1;
    }
    for (let i = 0; i < map[bus].length; i++) {
      const nextBus = map[bus][i];
      if (!seen.has(bus)) {
        seen.add[nextBus];
        queue.push([nextBus, depth + 1]);
      }
    }
  }
  return false;
};

const intersect = (A, B) => {
  let i = 0, j = 0;
  while (i < A.length && j < B.length) {
    if (A[i] === B[j]) return true;
    A[i] < B[j] ?  i ++ : j ++;
  }
  return false;
};