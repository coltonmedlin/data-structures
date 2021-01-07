

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.storage[value] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let edges = this.storage[node];
  for (let i = 0; i < edges.length; i++) {
    this.removeEdge(edges[i], node);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let edges = this.storage[fromNode];
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let edges = this.storage[fromNode];
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === toNode) {
      edges.splice(i, 1);
    }
  }
  edges = this.storage[toNode];
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] === fromNode) {
      edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let item in this.storage) {
    cb(item);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: constant
 contains: constant
 removeNode: linear (because of remove edges)
 hasEdge: linear
 addEdge: constant
 removeEdge: linear
 forEach: linear
 */



