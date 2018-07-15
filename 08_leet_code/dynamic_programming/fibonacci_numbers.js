// generate nth fibonnaci number via dynamic programming
// dynamic programming - break problem into subproblems and then
// recursively find solns to the subproblems
const fib = (n) => {
  // initialize fib map w/ seed values
  // use to store soln to subproblems (memoization)
  let map = [0, 1, 1];

  // closure will populate the map recursively
  const calc = (n) => {
    if (!map[n]) {
      // subproblem is f(n-1) + f(n-2)
      map[n] = calc(n - 1) + calc(n - 2);
    }
    // instead of recalculating same problems
    //just lookup previous soln in map
    return map[n];
  };
  return calc(n);
};

// fib seq: 1, 1, 2, 3, 5, 8, 13, 21...
// ex. problem tree w/o dynamic programming time complexity: O(2^n)
//    5
//   3  2
//  2 1 1 1
// 1 1

// no longer need to recalculate the two node
// time complexity: O(n)
// at most n recursive calls are made
console.log(fib(5)); // => 5
