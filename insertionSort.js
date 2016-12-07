function insertionSort(array) {
  //loop over array starting at index 1
  for(let i = 1; i < array.length; i += 1) {
    let sorting = array[i];
    //if selected array value is less than the preceeding value, swap them
    //repeat this until the selected value is greater than the preceeding value or there is no preceeding value
    if(sorting < array[i-1]) {
      let j = i-1
      while(sorting < array[j]) {
          let swap = array[j];
          array[j] = sorting;
          array[j+1] = swap;
          j--;
        }
    }
  }
  return array;
}
