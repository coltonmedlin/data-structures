var BinarySearchTree = function(value) {
//   this.storage;
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, extendMethods);

  return newTree;
};

extendMethods = {};

extendMethods.insert = function(value) {
  let insertNode = BinarySearchTree(value);

  if (!this.value) {
    this.value = insertNode;
    return this;
  }
  let root = this;


  const innerFunc = function(node) {

    if (value > node.value && node.right === null) {
      node.right = insertNode;
      return this;
    }
    if (value < node.value && node.left === null) {
      node.left = insertNode;
      return this;
    }

    //recursive case - there are more children
    if (value < node.value) {
      innerFunc(node.left);
    } else {
      innerFunc(node.right);
    }

  };

  return innerFunc(root);

};

extendMethods.contains = function(value) {

  const root = this;

  const innerFunc = function(node) {
    //base case -- we found it
    if (value === node.value) {
      return true;
    }

    //base case -- bottom of the tree
    if (value < node.value && node.left === null) {
      return false;
    }
    if (value > node.value && node.right === null) {
      return false;
    }

    //recursive - there are more children
    if (value < node.value) {
      return innerFunc(node.left);
    } else {
      return innerFunc(node.right);
    }
  };

  return innerFunc(root);
};

extendMethods.depthFirstLog = function(value) {

  const innerFunc = function(node) {
    //base case -- we have reached the end of the tree
    if (node.value) {
      value(node.value);
    }

    if (node.left) {
      innerFunc(node.left);
    }
    if (node.right) {
      innerFunc(node.right);
    }

  };

  innerFunc(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 depthLog: linear
 all others: logrithmic
 */
