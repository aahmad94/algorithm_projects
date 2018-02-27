/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Creating a node class
function ListNode(key = null, val = null) {
  this.key = key;
  this.data = val;
  this.prev = null;
  this.next = null;
}

ListNode.prototype.remove = function() {
  this.prev.next = this.next;
  this.next.prev = this.prev;
  this.prev = null;
  this.next = null;
};


// Creating a doubly linked list
function DoublyLinkedList() {
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

DoublyLinkedList.prototype.append = function(key, val) {
  const newNode = new Node(key, val);
  const lastNode = this.tail.prev;

  lastNode.next = newNode;
  newNode.prev = lastNode;

  this.tail.prev = newNode;
  newNode.next = this.tail;

  return newNode;
};
DoublyLinkedList.prototype.removeFirst = function() {
  const firstNode = this.head.next;
  firstNode.remove();
  return firstNode;
};