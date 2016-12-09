//uncomment the console.logs and paste the code into repl/console to test them out

//rotate a matrix 90 degrees
function rotateMatrix90(matrix) {
  var n = matrix.length;
  var length = n-1;
  let rotated = []
  for(let i = 0; i < n; i += 1){
  	rotated.push(new Array(n))
  }
  matrix.forEach((row, rowIndex) => {
    row.forEach((val, colIndex) => {
      //previous column becomes the new row
      //length - previous row becomes the new column
      rotated[colIndex][length-rowIndex] = val;
    })
  })
  return rotated;
}
//console.log(rotateMatrix90(rotateMatrix90(rotateMatrix90([ [7,4,1],[8,5,2],[9,6,3]]))), ' Should be [[1,2,3],[4,5,6],[7,8,9]]');


//if a matrix value is 0, turn the whole row and column into 0s
function zeroMatrix(matrix) {
  var n = matrix.length;
  var length = n-1;
  var zeroLocations = [];
  matrix.forEach((row, rowIndex) => {
    row.forEach((val, colIndex) => {
      if(val === 0) {
        zeroLocations.push([rowIndex, colIndex]);
      }
    })
  })
  zeroLocations.forEach((pair, i) => {
   matrix.forEach((row, rowIndex) => {
    row.forEach((val, colIndex) => {
      if(rowIndex === pair[0]) {
        matrix[rowIndex][colIndex] = 0;
      }
      if(colIndex === pair[1]) {
        matrix[rowIndex][colIndex] = 0;
      }
    })
   })
  })
  return matrix;
}
// console.log(zeroMatrix([ [7,0,1],[8,0,2],[9,6,3]]), ' Should be [[1,2,3],[4,5,6],[7,8,9]]');


//check if two strings are one operation away from eachoter (adding, removing, or changin one letter)
var oneAway = (str1, str2) => {
  if(Math.abs(str1.length - str2.length) > 1) return false;
  var longer = str1.length >= str2.length ? str1 : str2;
  var shorter = str1.length < str2.length ? str1 : str2;
  var different = [];
  for(let i = 0; i < longer.length; i += 1) {
    if(shorter.indexOf(longer[i]) === -1) {
      different.push(longer[i]);
    }
  }
  return different.length <= 1;
}
// console.log(oneAway('ccake', 'bcake'), ' Should be true');
// console.log(oneAway('cake', 'raked'), ' Should be false');


//compress a string with the number of times a letter occurs in a row
var stringCompression = (string) => {
  var chars = string.split('');
  var compressed = '';
  for(let i = 0; i < chars.length; i += 1) {
    let count = 1;
    let j = i
    while(chars[j + 1] === chars[j]) {
      count += 1;
      j += 1;
      i += 1;
    }
    compressed += `${count}${chars[j]}`;
  }
  return compressed;
}
// stringCompression('aaaabbbbccccddddaa', ' Should be 4a4b4c4d2a');


//check if a string contains no character more than once
function isUnique(str) {
  var chars = {};
  for(let i = 0; i < str.length; i += 1) {
    //using indexOf works, but is n^2 time complexity (Also, we could check if the string is more than the number of unique characters (256?))
    // if(str.indexOf(str[i]) !== i) {
    //   return false;
    // }
    if(chars[str[i]]) return false;
    chars[str[i]] = 1;
  }
  return true;
}
// console.log(isUnique('ab11c'), ' Should be false');
// console.log(isUnique('ab1cdef'), ' Should be true');


//check if two strings are permuations
function isPermutation(string1, string2) {
  var str1 = string1.toLowerCase();
  var str2 = string2.toLowerCase();
  //if two strings are identical or their lengths are not equal then they are not permutaions
  if(str1 === str2) return false;
  if(str1.length !== str2.length) return false;
  //create an object with all of the characters then check if the other string contains all of those characters
  var length = str1.length;
  var chars1 = {};
  for(let i = 0; i < length; i += 1) {
    chars1[str1[i]] = 1;
  }
  //two loops (O(n)) is faster than using one loop with indexOf (O(n^2))
  for(let i = 0; i < length; i += 1) {
    if(!chars1[str2[i]]) return false;
  }
  return true;
}


//check if two strings are permuations
function isPermutation2(str1, str2) {
  return (str1.split('').sort().join('') === str2.split('').sort().join(''));
}
// console.log(isPermutation('race', 'care'), ' Should be true');
// console.log(isPermutation('racer', 'cared'), ' Should be false');


//convert whitespace to %20
function urlString(string) {
  return string.split(' ').join('%20');
}
// console.log(urlString('path to file'), ' Should be path%20to%20file');
