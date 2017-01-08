function addToHeap(heap, value) {
  //push value into heap
  heap.push(value);
  var length = heap.length;
  var index = length;
  var parent = Math.floor(index/2)
  // compare inserted value with its parten (index/2), swap if it is smaller
  while(value < heap[parent]) {
    let swap = heap[parent];
    heap[parent] = value;
    heap[index] = swap;
    index = Math.floor(index/2);
    parent = Math.floor(parent/2)
  }
  return heap[1];
}
// addToHeap(binaryHeap, 9);
// addToHeap(binaryHeap, 10);
// addToHeap(binaryHeap, 100);
// addToHeap(binaryHeap, 22);
// addToHeap(binaryHeap, 8);
// addToHeap(binaryHeap, 62);
// console.log(binaryHeap);

function removeMinFromHeap(heap) {
  var min = heap[1];
  heap[1] = heap.pop();
  var index = 1;
  var child = index*2 + 1;
  while(heap[index] > heap[child]) {
    var swap = heap[index];
    heap[index] = heap[child];
    heap[child] = swap;
  }
  return min;
}
removeMinFromHeap(binaryHeap)
// console.log(binaryHeap)
