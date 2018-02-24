var isValid = function (s) {

  const stack = new Array();
  const open = new Set(["(", "{", "["]);
  const close = new Set([")", "}", "]"]);
  const map = { ")": "(", "}": "{", "]": "[" }

  for (let i = 0; i < s.length; i++) {
    let chr = s[i]
    if (close.has(chr)) {
      const popped = stack.pop();
      if (popped !== map[chr]) {
        return false;
      }
    } else {
      if (!open.has(chr)) {
        return false;
      }
      stack.push(chr)
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};