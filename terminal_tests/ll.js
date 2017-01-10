var chai = require('chai');
var fns = require('../LinkedLists.js')
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('Linked List', function() {
  var linkedList;
  beforeEach(function() {
    linkedList = new fns.SinglyLinkedList();
  });
  afterEach(function() {
    linkedList = null;
  });

  it('should have head and a size', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('size');
  });

  it('should have methods named "add", "remove", and "find"', function() {
    expect(linkedList.add).to.be.a('function');
    expect(linkedList.remove).to.be.a('function');
    expect(linkedList.find).to.be.a('function');
  });

  it('should have a head and size of 1 when the first node is added', function() {
    linkedList.add(1);
    expect(linkedList.head.data).to.equal(1);
    expect(linkedList.size).to.equal(1);
  });

  it('should increase in size when nodes are added', function() {
    linkedList.add(1);
    linkedList.add(4);
    linkedList.add(2);
    linkedList.add(8);
    expect(linkedList.size).to.equal(4);
    linkedList.remove(4);
    expect(linkedList.size).to.equal(3);
  });

  it('should remove nodes', function() {
    linkedList.add(4);
    linkedList.add(5);
    expect(linkedList.head.data).to.equal(4);
    linkedList.remove(4);
    expect(linkedList.head.data).to.equal(5);
    expect(linkedList.size).to.equal(1);
    expect(linkedList.find(4)).to.be.false;
  });

  it('should return the value of the removed node', function() {
    linkedList.add(4);
    linkedList.add(1);
    linkedList.add(410);
    expect(linkedList.remove(410)).to.equal(410);
  });

  it('should contain a value that was added', function() {
    linkedList.add(0);
    linkedList.add(8);
    expect(linkedList.find(0)).to.equal(true);
    expect(linkedList.find(8)).to.equal(true);
    expect(linkedList.find(1)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.add(4);
    linkedList.add(5);
    linkedList.remove(4);
    expect(linkedList.find(4)).to.equal(false);
  });

});
