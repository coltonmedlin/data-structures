

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var current = this._storage.get(index);
  if (current === undefined) {
    var value = [[k, v]];
    this._storage.set(index, value);
  } else {
    for (var i = 0; i < current.length; i++) {
      if (current[i][0] === k) {
        current[i][1] = v;
        var found = true;
      }
    }
    if (!found) {
      current.push([k, v]);
    }
    this._storage.set(index, current);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var area = this._storage.get(index);
  if (area === undefined) {
    return undefined;
  }
  for (var i = 0; i < area.length; i++) {
    if (area[i][0] === k ) {
      return area[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
all are constant time
 */


