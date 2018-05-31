// generate fibonnaci numbers via dynamic programming
// dp - break problem into subproblems and then
// recursively find solns to the subproblems
const fib = (n) => {
  // initialize fib map w/ seed values
  // use to store soln to subproblems
  let map = [0, 1, 1];

  // closure will populate the map recursively
  const calc = (n) => {
    if (!map[n]) {
      // subproblem is f(n-1) + f(n-2)
      map[n] = calc(n - 1) + calc(n - 2);
    }
    return map[n];
  };
  return calc(n);
};

console.log(fib(4));
