// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 - > 8 - > 0 - > 7

const ListNode = function(val) {
  this.val = val;
  this.next = null;
};

const addTwoNumbers = function(l1, l2) {
  const l1Stack = [];
  const l2Stack = [];
  const l3Stack = [];
  // populate l1 and l2 stacks
  while (l1) {
    l1Stack.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    l2Stack.push(l2.val);
    l2 = l2.next;
  }

  // populate l3 stack
  while (l1Stack.length > 0 && l2Stack.length > 0) {
    let sum = l1Stack.pop() + l2Stack.pop();
    l3Stack.push(sum);
  }
  while (l1Stack.length > 0) {
    l3Stack.push(l1Stack.pop())
  }
  while (l2Stack.length > 0) {
    l3Stack.push(l2Stack.pop())
  }

  // go through l3 stack and carry over values greater than 9
  // left side of l3 contains least significant values 
  for (let i = 0; i < l3Stack.length; i++) {
    if (l3Stack[i] > 9) {
      l3Stack[i + 1] = l3Stack[i + 1] ?
        l3Stack[i + 1] + Math.floor(l3Stack[i] / 10) :
        Math.floor(l3Stack[i] / 10);
      l3Stack[i] = l3Stack[i] % 10;
    }
  }

  // dequeue l3 stack and store as new list
  // keep a reference of the head for ans
  let l3 = new ListNode(l3Stack.pop());
  let ans = l3;
  while (l3Stack.length > 0) {
    l3.next = new ListNode(l3Stack.pop());
    l3 = l3.next;
  }
  return ans;
};