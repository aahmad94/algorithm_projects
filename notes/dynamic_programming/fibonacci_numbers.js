const fib = (n) => {
  let map = [0, 1, 1];
  const calc = (n) => {
    if (!map[n]) {
      map[n] = calc(n - 1) + calc(n - 2);
    }
    return map[n];
  };
  return calc(n);
};

console.log(fib(4));