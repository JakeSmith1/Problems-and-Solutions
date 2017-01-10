var makeGraph = function() {
  var graph = {};
  return graph;
}

var addVertex = function(graph, node) {
  //should use unique id for nodes so names do not overlap
  graph[node] = graph[node] || {edges:{}};
  return graph;
}



var contains = function(graph, node) {
  return Boolean(graph[node])
}
var addEdge = function(graph, to, from) {
  if(graph[to] && graph[from]) {
    graph[to].edges[from] = true;
    graph[from].edges[to] = true;
    return graph;
  }
  return false;
}

var removeVertex = function(graph, node) {
  if(graph[node]) {
    delete graph[node];
    for(var key in graph) {
      if(graph[key].edges[node]) {
        delete graph[key].edges[node];
      }
    }
    return true;
  }
  return false;
}
var removeEdge = function(graph, to, from) {
  if(graph[to].edges[from] && graph[from].edges[to]) {
    delete graph[to].edges[from];
    delete graph[from].edges[to];
    return graph;
  }
  return false;
}
var containsEdge = function(graph, to, from) {
  if(graph[to]) {
    return graph[to].edges[from];
  }
  return false;
}

// let people = makeGraph();
//
// addVertex(people, 'jimmy')
// addVertex(people, 'arthur')
// addVertex(people, 'robspierre')
// addVertex(people, 'mary')
//
// contains(people, 'jack');
// addEdge(people, 'jimmy', 'arthur')
// removeEdge(people,'jimmy', 'arthur')
// removeVertex(people, 'jimmy')
// containsEdge(people, 'jimmy', 'arthur')
module.exports = {makeGraph, addVertex, contains, removeEdge, removeVertex, addEdge}
