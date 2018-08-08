class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const findIntersection = (l1, l2) => {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  let head = l1;

  while(l1.val === l2.val) {
    l1 = l1.next;
    l2 = l2.next;
    if (l1 === null) return reverseList(l1);
    if (l2 === null) return reverseList(l2);
  }

  l1.next = null;
  return reverseList(head).next;
};

const reverseList = (l) => {
  if (!l) return l;
  if (!l.next) return l;
  let rear = l;
  let front = l.next;
  rear.next = null;
  while(front) {
    const newRear = front;
    const newFront = front.next;
    front.next = rear;
    
    rear = newRear;
    front = newFront;
  }

  return rear;
};

const l1 = new Node(3);
l1.next = new Node(7);
l1.next.next = new Node(8);
l1.next.next.next = new Node(10);

const l2 = new Node(10);

console.log(findIntersection(l1, l2));