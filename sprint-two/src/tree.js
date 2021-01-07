var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  // your code here
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // var node = this.newNode(value);
  var node = Tree(value);
  this.children.push(node);
};


// Tree.contain(5);
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

// treeMethods.newNode = function(value) {
//   return {
//     value: value,
//     children: []
//   };
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
