function binarySearch(array, target){
  var min  = 0;
  var max = array.length - 1;
  var middle = Math.floor((min + max)/2);
  while(min < max){
    if(target === array[middle]){
      return middle;
    } else if (target < array[middle]){
      max = middle-1;
    } else if (target > array[middle]){
      min = middle+1;
    }
    middle = Math.floor((min + max)/2);
  }
  return -1;
}
