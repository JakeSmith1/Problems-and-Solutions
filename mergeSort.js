//recursive
function splitThenSort(array) {
  //break down left and right until get array with one item (one item is sorted)
  if(array.length < 2) {
    return array;
  }
  var l = array.length;
  var middle = Math.floor(l/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, l)
  //merge left and right once they starting from sorted
  return zip(splitThenSort(left), splitThenSort(right));
}
function zip(left, right) {
  var merged = [];
  //can compare zero index and unshift, so the zero index is always being compared
  //merge until one side runs out, then add the rest of the other side (already sorted)
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
     merged.push(left.shift()) ;
    } else {
    merged.push(right.shift());
    }
  }
  return [...merged, ...left, ...right];
}

//iterative merge in ascending order
function iterative(a) {
  var l = a.length;
  var singles = []
  //push array of each item into an array to be sorted later(instead of recursively splitting the array)
  for(let i = 0; i < l; i += 1) {
    singles.push([a[i]]);
  }
  singles.push([])//incase odd number
  //iteralte over length of a until a/2, and iterate from the start going up by two so you merge the first two arrays which keep growing in size
  for (var lim = l; lim > 1; lim = Math.floor((lim+1)/2)){
    for (var j=0,k=0; k < lim; j++, k+=2){
      singles[j] = mmmerge(singles[k], singles[k+1]);
    }
    singles[j] = [];  //in case of odd number of items
  }

  return singles[0];
}
function mmmerge(left, right){
  var result = [];

  while (left.length > 0 && right.length > 0){
    if (left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
}

//iterative merge descending order with spread operator
function splitter(a) {
  if(a.length < 2) { return a; }
  var l = a.length;
  var m = Math.floor(a.length/2)
  var left = a.slice(0,m)
  var right = a.slice(m,l)
  return mmerge(splitter(left), splitter(right))
}
function mmerge(l,r) {
  let res = [];
  while(l.length && r.length) {
    if(l[0] >= r[0]) {
      res.push(l.shift())
    } else
    res.push(r.shift())
  }
  return [...res, ...l, ...r]
}
