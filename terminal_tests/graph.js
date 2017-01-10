var chai = require('chai');
var functions = require('../graph.js');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('Graph', function() {
  var graph;
  beforeEach(function() {
    graph = functions.makeGraph();
    functions.addVertex(graph, 'test')
    functions.addVertex(graph, 'test2')
    functions.addVertex(graph, 'test3')
    functions.addEdge(graph, 'test', 'test2')
  });
  afterEach(function() {
    graph = null;
  });

  it('graph nodes should have an edges object', function() {
    var node = graph['test'];
    expect(node).to.have.property('edges');
    expect(node.edges).to.be.an('object')
  });

  it('addVertex should add a vertex', function() {
    expect(graph).to.have.property('test');
  });

  it('contains should return true if the graph contains the vertex and false if if does not', function() {
    var result = functions.contains(graph, 'test');
    var result2 = functions.contains(graph, 'false');
    expect(result).to.be.true;
    expect(result2).to.be.false;
  });

  it('addEdge should add an edge to both of the nodes', function() {
    var node1 = graph['test'];
    var node2 = graph['test2'];
    expect(node1.edges).to.have.property('test2');
    expect(node2.edges).to.have.property('test');

  });

  it('removeEdge should remove an edge from both of the nodes', function() {
    var node1 = graph['test'];
    var node2 = graph['test2'];
    functions.removeEdge(graph, 'test', 'test2');
    expect(node1.edges).to.not.have.property('test2');
    expect(node2.edges).to.not.have.property('test');
  });

  it('removeVertex should remove a vertex and any connected nodes', function() {
    var node = graph['test2'];
    functions.removeVertex(graph, 'test');
    expect(node.edges).to.not.have.property('test');
    expect(graph).to.not.have.property('test');
  });

});
