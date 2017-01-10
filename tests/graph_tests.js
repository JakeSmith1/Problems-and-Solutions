var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('Graph', function() {
  var graph;
  beforeEach(function() {
    graph = makeGraph();
    addVertex(graph, 'test')
    addVertex(graph, 'test2')
    addVertex(graph, 'test3')
    addEdge(graph, 'test', 'test2')
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
    var result = contains(graph, 'test');
    var result2 = contains(graph, 'false');
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
    removeEdge(graph, 'test', 'test2');
    expect(node1.edges).to.not.have.property('test2');
    expect(node2.edges).to.not.have.property('test');
  });

  it('removeVertex should remove a vertex and any connected nodes', function() {
    var node = graph['test2'];
    removeVertex(graph, 'test');
    expect(node.edges).to.not.have.property('test');
    expect(graph).to.not.have.property('test');
  });

});
