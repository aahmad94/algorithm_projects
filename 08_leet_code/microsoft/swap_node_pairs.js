// changing val
var swapPairs1 = function (head) {
  if (!head) return head;
  const frontier = head.next;
  const rear = head;
  while (frontier) {
    const frontierVal = frontier.val;
    frontier.val = rear.val;
    rear.val = frontierVal;
    frontier = frontier.next;
    if (frontier) {
      frontier = frontier.next;
    } else {
      break;
    }
    rear = rear.next.next;
  }
  return head;
};

// wo changing val
// changin pointers
var swapPairs2 = function (head) {
  if (head === null || head.next === null) return head;
  let p1 = head;
  let p2 = head.next;
  swap(p1, p2);
  head = p2;
  while (p1.next && p2.next.next.next) {
    const prev = p1;
    p1 = p1.next;
    p2 = p2.next.next.next;
    prev.next = p2;
    swap(p1, p2);
  }
  return head;
};

const swap = (p1, p2) => {
  const temp = p1;
  p1.next = p2.next;
  p2.next = temp;
};