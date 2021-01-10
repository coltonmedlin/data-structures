const Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

let size = 0;


treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
  size++;
};


treeMethods.contains = function(target) {
  var test = false;
  var innerContains = function(node) {
    if (node.value === target) {
      test = true;
    } else {
      if (node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          innerContains(node.children[i]);
        }
      }
    }
  };
  innerContains(this);
  return test;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant
 contains: linear
 */
