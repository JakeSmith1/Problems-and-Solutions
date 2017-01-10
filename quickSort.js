function quickSort(array) {
  //select pivot
  //iterate through array, compare to pivot, if smaller go into left, if larger go into right
  //call quickSort on left and right
  //base case if array empty or length of one
  //concat lists with pivot inbetween
  if(array.length < 1) return array;
  var length = array.length-1;
  var pivot = array[length],
    left = [],
    right = [];
  for(let i = 0; i < length; i += 1) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// console.log(quickSort([1,5,7,8,9,5,4,3,2,5,4,3,2]));
// console.log(quickSort([1,2,1,-1,5]));
// console.log(quickSort([1]));
module.exports = {quickSort};
