//singly and doubly linked lists with some Es6 thrown around

//Node constructor for the linked lists
function Node(data) {
  this.data = data;
  this.next = null;
}

//this is  Es5
// function SinglyLinkedList() {
//   this.head = null;
//   this.size = 0;
// }

//Es6 class declaration, note that this is not hoisted like a function declaration
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //methods can be defined here with Es6 syntax (instead of add: function() {})
  add(data) {
    var node = new Node(data);
    if(!this.head) {this.head = node; this.size = 1; return this;}
    var current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    this.size += 1;
    return this;
  }
  //if you add static before a method, it is available without instantiating a class, and not on an instance
  static startingValues() {
    return {head: null, size: 0};
  }
}
//or methods can be added to the prototype (you could also add more than one at once with SinglyLinkedList.prototype = {method1:funtion(){}.method2:function(){}})
SinglyLinkedList.prototype.remove = function(data) {
 if(!this.head) return 'nothing to remove';
 else if(this.head.data === data) {
   let remove = this.head.data;
   this.head = this.head.next;
   this.size--;
   return remove;
 } else {
   var current = this.head;
   if(!current.next) return 'node not found';
   while(current.next) {
     if(current.next.data === data) {
       let remove = current.next.data;
       current.next = current.next.next;
       this.size--;
       return remove;
     }
     current = current.next;
   }
   return 'node not found';
 }
}

SinglyLinkedList.prototype.find = function(target) {
  if(!this.head) return 'no nodes';
  if(this.head.data === target) return true;
  var current = this.head;
  while(current) {
    if(current.data === target) {
      return true;
    }
    current = current.next;
  }
  return false;
}
// var list = new SinglyLinkedList();
// list.add(1)
// list.add(2)
// list.add(3)
// list.add(4)
// list.remove(4)
// console.log(list.head.next.next)
// SinglyLinkedList.add();//not a function
// SinglyLinkedList.startingValues() //{head: null, size: 0}
// list.startingValues()//not a function

SinglyLinkedList.prototype.removeDuplicates = function() {
  var list = {};
  var duplicates = [];
  var current = this.head;
  while(current) {
    if(list[current.data]) {
      duplicates.push(current.data)
    }
    list[current.data] = true;
    current = current.next;
  }
  duplicates.forEach((target)=>this.remove(target));
}
//remove duplicates without taking up additional memory
SinglyLinkedList.prototype.removeDupNoBuffer = function() {
  var current = this.head;
  while(current) {
    var runner = current;
    while(runner.next) {
      if(runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next
  }
}

SinglyLinkedList.prototype.findNfromEnd = function(n) {
  var point1 = this.head;
  var point2 = this.head;
  for(let i = 0; i < n; i += 1) {
    if(!point1.next) return 'too far from the end';
    point1 = point1.next;
  }
  while(point1.next) {
    point1 = point1.next;
    point2 = point2.next;
  }
  return point2;
}

SinglyLinkedList.prototype.deleteMiddle = function(n) {
  if(this.size < 2) return 'size must be > 3 to delete the middle';
  var p1 = this.head;
  var p2 = null;
  while(p1.next) {
    p1 = p1.next.next;
    p2 = p2 ? p2.next : this.head;
  }
  var middle = p2.next;
  p2.next = p2.next.next;
  return middle.data;
}
