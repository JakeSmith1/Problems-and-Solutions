function bubbleSort(array) {
  var swapped;
  var firstRun = true;

  while(firstRun || swapped) {
    firstRun = false;
    swapped = false;

    for(var i = 0; i < array.length; i += 1) {
      if(array[i] > array[i+1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  }
  return array;
}

module.exports = {bubbleSort};
