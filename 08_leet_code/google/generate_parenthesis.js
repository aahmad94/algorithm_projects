function generateParenthesis(n) {
  let res = [];
  generate(n, n, '', res);
  return res;
}

function generate(l, r, s, res) { // l: left remaining, r: right remaining
  console.log(`l = ${l}, r = ${r}, str = ${s}`);
  if (l > r) return; // e.g. ))(

  if (!l && !r) return res.push(s);

  if (l) generate(l - 1, r, s + '(', res);
  if (r) generate(l, r - 1, s + ')', res);
}

console.log(generateParenthesis(3));