var isValid = function (s) {

  if (s.length % 2 === 1) {
    return false;
  }

  const stack = new Array();
  const open = new Set(["(", "{", "["]);
  const close = new Set([")", "}", "]"]);
  const map = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < s.length; i++) {
    let chr = s[i];
    if (close.has(chr)) {
      if (stack.pop() !== map[chr]) {
        return false;
      }
    } else if (open.has(chr)) {
        stack.push(chr);
      } else {
        return false;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};