var reverseList = function (head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let second = head.next;
  let first = head;
  first.next = null;
  while (second !== null) {
    const third = second.next;
    second.next = first;
    first = second;
    second = third;
  }
  return first;
};