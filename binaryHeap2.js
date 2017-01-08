//binary heaps allow the smallest/largest element to be found quickly
//great for priority queues
//could have a bunch of objects (a tree) - but lots of memory
//could have a regular array but searching and insterting before the end takes a while
//--> semi sorted array

//root is at index 1, x*2 and x*2 + 1 are children, Math.floor(x/2) is parent

class BinaryHeap {
  constructor(compareFunc) {
    this.content = [null];
    this.compareFunc = compareFunc;
  }
}


//when adding an element, it is put at the end and allowed to bubble up unitl it is larger than a parent or it is the first element
BinaryHeap.prototype.push = function(val) {
  this.content.push(val);
  this.bubbleUp(this.content.length-1);
}


//when removing the smallest element, the index 1 is removed, then the last element is moved into index 1 and sunk down until it is greater than the child or the last element
BinaryHeap.prototype.pop = function() {
  var length = this.content.length
  //if there is more than [null] move the last value to index 1 then sink it down so the new min is at index 1, and return the min value
  if(length > 1) {
    var first = this.content[1];
    var last = this.content[length-1]
    this.content[1] = last;
    this.sinkDown(1);
    this.content.pop()
    return first;
  } else {
    return 'empty heap'
  }
}


BinaryHeap.prototype.remove = function(node) {
  var length = this.content.length;
  //if node is found, pop the end off and replace it (unless the end is being searched for) then sink down and bubble up the value
  for(let i = 0; i < length; i += 1) {
    if(this.content[i] === node) {
      if(i === length-1) break;
      var end = this.content.pop();
      var remove = this.content[i];
      this.content[i] = end;
      this.sinkDown(i);
      this.bubbleUp(i);
      return remove;
    }
  }
}


BinaryHeap.prototype.size = function() {
  return this.content.length;
}


BinaryHeap.prototype.sinkDown = function(n) {
  //take value at index one and
  //while still swapping, compare to children, if it is greater than, then swap, else set swap to false to end the loop
  var length = this.content.length-1;
  var sink = this.content[n];
  var swap;
  while(true) {
    swap = false;
    var child1n = n * 2, child1;
    var child2n = n * 2 + 1, child2;
    if(child1 < length) {
      child1 = this.content[child1n];
      if(this.score(sink, child1)) {
        this.content[n] = child1;
        this.content[child1n] = sink;
        swap = true;
      }
    }
    if(child2 < length) {
      child2 = this.content[child2n];
      if(this.score(sink, child2)) {
        this.content[n] = child2;
        this.content[child2n] = sink;
        swap = true;
      }
    }
    if(!swap) break;
  }
}


BinaryHeap.prototype.bubbleUp = function(n) {
  //get the element that has to be bubbled up
  var element = this.content[n];
  var compare = this.compareFunc;
  var parentN = Math.floor(n/2);

  //loop until element in place or n grater than 0
  while(parentN > 0) {

    //get parent element
    var parent = this.content[parentN];

    //if element less than parent (min heap), then swap them and set the new n and parentN, else break out of the loop
    if(element > parent) {
      break;
    }
    this.content[parentN] = element;
    this.content[n] = parent;
    n = parentN;
    parentN = Math.floor(n/2)
  }
}



// //uncomment to test
// var heap = new BinaryHeap(function(a,b){return a > b})
// heap.size()
// heap.push(4)
// heap.push(8)
// heap.push(9)
// heap.push(3)
// heap.push(2)
// var min = heap.pop();
// // heap.pop()
// // heap.pop()
// // heap.pop()
// // heap.pop()
// // heap.pop()
// heap.push(0)
// console.log(heap.content, min)
// heap.remove(9)
// console.log(heap.content, min)
