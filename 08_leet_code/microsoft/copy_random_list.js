const RandomListNode = function(label) {
  this.label = label;
  this.next = null;
  this.random = null;
}

const copyRandomList = function (head) {
  if (head === null) {
    return null;
  }
  const map = {};
  let currNode = head;
  while (currNode !== null) {
    map[currNode] = new RandomListNode(currNode.label);
    currNode = currNode.next;
  }

  currNode = head;
  while (currNode !== null) {
    map[currNode].next = map[currNode.next];
    map[currNode].random = map[currNode.random];
    currNode = currNode.next;
  }
  return map[head];
};