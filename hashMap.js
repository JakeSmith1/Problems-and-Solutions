class HashMap {
  constructor() {
    this.storage = [];
    this.size = 0;
    this.limit = 10;
  }
}
HashMap.prototype.insert = function(key, value) {
  var index = hasher(key, this.limit);
  var tuple = [key, value];
  //check if no bucket
  if(!this.storage[index]) {
    this.storage[index] = [];
  } //check if the key already exists in the bucket, overwrite if true
  else if (this.storage[index].length) {
    for(var i = 0; i < this.storage[index].length; i += 1) {
      if(this.storage[index][i][0] === key) {
        var removed = this.storage[index][i][1];
        this.storage[index][i][1] = value;
        return removed;
      }
    }
  }
  //else push the tuple into the bucket and increase size
  this.storage[index].push(tuple);
  this.size += 1;
  //check if the table needs to be resized
  if(this.size > 3/4 * this.limit) {
    this.resize(this.limit * 2);
  }
  return tuple;
}
HashMap.prototype.remove = function(key) {
  var index = hasher(key, this.limit);
  if(!this.storage[index]) return false;
  for(var i = 0; i < this.storage[index].length; i += 1) {
    if(this.storage[index][0] === key) {
      var remove = this.storage[index].splice(i,1);
      this.size -= 1;
      if(this.size < 1/4*this.limit) {
        this.resize(this.limit/2)
      }
      return remove;
    }
  }
}
HashMap.prototype.get = function(key) {
  var index = hasher(key, this.limit);
  if(!this.storage[index]) return false;
  for(var i = 0; i < this.storage[index].length; i += 1) {
    if(this.storage[index][i][0] === key) {
      return this.storage[index][i][1];
    }
  }
  return false;

}
HashMap.prototype.resize = function(newLimit) {
  this.limit = newLimit;
  var oldStorage = this.storage;
  this.storage = [];
  this.size = 0;
  oldStorage.forEach(function(bucket, key, collection) {
    if(bucket) {
      bucket.forEach(function(tuple) {
        this.insert(...tuple);
      }, this);
    }
  }, this);
}
//needs to be idempotent: same input gives same output
function hasher(key, max) {
  var hash = 0;
  for(var i = 0; i < key.length; i += 1) {
    //multiply by i so that different keys with the same characters at different positions do not yeild the same value
    hash += key.charCodeAt(i) * i;
  }
  return hash % max;
}
