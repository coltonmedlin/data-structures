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



treeMethods.contains = function(target) {
  var test = false;
  var tree = newTree;
  var innerContains = function(children) {
    if (children.value === target) {
      test = true;
    } else {
      if (childeren.length > 0) {
        for (var i = 0; i < children.length; i++) {
          innerContains(children[i]);
        }
      }
    }
  };
  innerContains(tree);
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
