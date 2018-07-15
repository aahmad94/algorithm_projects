function ListNode(val) {
  this.val = val;
  this.next = null;
}

const hasCycle = function (head) {
  const set = new Set();

  while (head) {
    if (set.has(head)) {
      return true;
    } else {
      set.add(head);
    }

    head = head.next;
  }

  return false;
};

const head = new ListNode(2);
head.next = head;

console.log(hasCycle(head));