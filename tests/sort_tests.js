var assert = chai.assert;
var expect = chai.expect;

//describe groups tests
describe('Bubble Sort', function() {
  var input = [3,2,1];
  //it describes individual tests
  it('should be a function', function() {
    expect(bubbleSort).to.be.a('function');
  })
  it('should return an array', function() {
    let output = bubbleSort(input);
    expect(output).to.be.an('array');
  });
  it('should return a sorted array', function() {
    let output = bubbleSort(input);
    expect(output).to.eql([1,2,3]);
  });
});
