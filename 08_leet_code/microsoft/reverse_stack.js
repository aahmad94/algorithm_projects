const reverseStack = (stack) => {
  if (stack.length === 0) return stack;
  const popped = stack.pop();
  const toReturn = moveToBottom(stack, popped);
  return toReturn;
};

const moveToBottom = (stack, x) => {
  if (stack.length === 0) {
    stack.push(x);
    return stack;
  }
  const popped = stack.pop();
  moveToBottom(stack, x);
  stack.push(popped);
  return stack;
};

console.log(reverseStack([3, 2, 1]));