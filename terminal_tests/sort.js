var chai= require('chai');
var bubble = require('../bubbleSort');
var insert = require('../insertionSort');
var merge = require('../mergeSort');
var quick = require('../quickSort');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

//describe groups tests
describe('Bubble Sort', function() {
  var bubbleSort = bubble.bubbleSort;
  //it describes individual tests
  it('should be a function', function() {
    expect(bubbleSort).to.be.a('function');
  })
  it('should return an array', function() {
    let input = [8,0,6,2,1];
    let output = bubbleSort(input);
    expect(output).to.be.an('array');
  });
  it('should return a sorted array', function() {
    let input = [8,0,3,6,2,1];
    let output = bubbleSort(input);
    expect(output.toString()).to.eql([0,1,2,3,6,8].toString());
  });
  it('should handle negative numbers and repeats', function() {
    let input = [20,-1,4,18,-44];
    var expected = [-44,-1,4,18,20].toString();
    var actual = bubbleSort(input).toString();
    actual.should.equal(expected);
  });
});

describe('Insertion Sort', function() {
  var insertionSort = insert.insertionSort;
  //it describes individual tests
  it('should be a function', function() {
    expect(insertionSort).to.be.a('function');
  })
  it('should return an array', function() {
    let input = [8,0,6,2,1];
    let output = insertionSort(input);
    expect(output).to.be.an('array');
  });
  it('should return a sorted array', function() {
    let input = [8,0,3,6,2,1];
    let output = insertionSort(input);
    expect(output.toString()).to.eql([0,1,2,3,6,8].toString());
  });
  it('should handle negative numbers and repeats', function() {
    let input = [20,-1,4,18,-44];
    var expected = [-44,-1,4,18,20].toString();
    var actual = insertionSort(input).toString();
    actual.should.equal(expected);
  });
});

describe('Merge Sort', function() {
  var splitThenSort = merge.splitThenSort;
  //it describes individual tests
  it('should be a function', function() {
    expect(splitThenSort).to.be.a('function');
  })
  it('should return an array', function() {
    let input = [8,0,6,2,1];
    let output = splitThenSort(input);
    expect(output).to.be.an('array');
  });
  it('should return a sorted array', function() {
    let input = [8,0,3,6,2,1];
    let output = splitThenSort(input);
    expect(output.toString()).to.eql([0,1,2,3,6,8].toString());
  });
  it('should handle negative numbers and repeats', function() {
    let input = [20,-1,4,18,-44];
    var expected = [-44,-1,4,18,20].toString();
    var actual = splitThenSort(input).toString();
    actual.should.equal(expected);
  });
});

describe('Quick Sort (unless the input is sorted then it is O(n^2))', function() {
  var quickSort = quick.quickSort;
  //it describes individual tests
  it('should be a function', function() {
    expect(quickSort).to.be.a('function');
  })
  it('should return an array', function() {
    let input = [8,0,6,2,1];
    let output = quickSort(input);
    expect(output).to.be.an('array');
  });
  it('should return a sorted array', function() {
    let input = [8,0,3,6,2,1];
    let output = quickSort(input);
    expect(output.toString()).to.eql([0,1,2,3,6,8].toString());
  });
  it('should handle negative numbers and repeats', function() {
    let input = [20,-1,4,18,-44];
    var expected = [-44,-1,4,18,20].toString();
    var actual = quickSort(input).toString();
    actual.should.equal(expected);
  });
});
