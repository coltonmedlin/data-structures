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
    if (this.head === null) {
      return null;
    }
    var value = this.head.value;
    this.head = this.head.next;
    return value;
  };

  list.contains = function(target) {

    if (this.tail.value === target) {
      return true;
    }

    const search = function (node) {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        search(node.next);
      }
    };

    return search(this.head) ? true : false;

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
 Remove Head = constant;
 Linked list complexity is linear;
 */
