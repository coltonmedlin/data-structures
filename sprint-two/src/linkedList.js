var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    this.tail = node;
    if (this.head === null) {
      this.head = this.tail;
    } else {
      var current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }

  };

  list.removeHead = function() {
    var value = this.head.value;
    this.head = this.head.next;
    return value;
  };

  list.contains = function(target) {
    var current = this.head;
    while (current.next !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    // if (current.value === target) {
    //   return true;
    // } else {
    //   return false;
    // }
    return current.value === target ? true : false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Linked list complexity is linear;
 */
