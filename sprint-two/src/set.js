var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Time Complexity for all of these are constant.
