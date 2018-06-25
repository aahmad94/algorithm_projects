var reverseList = function (head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let first = head;
  let second = head.next;
  first.next = null;
  while (second !== null) {
    const third = second.next;
    second.next = first;
    first = second;
    second = third;
  }
  return first;
};