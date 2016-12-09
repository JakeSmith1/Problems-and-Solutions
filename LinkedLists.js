//singly and doubly linked lists with some Es6 thrown around

//Node constructor for the linked lists
function Node(data) {
  this.data = data;
  this.next = null;
}

function DoublyLinkedList() {

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
   this.head = null;
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

SinglyLinkedList.prototype.find = function(data) {
  if(!this.head) return 'empty list';
  if(this.head.data === data) {
    return true;
  }
  var current = this.head
  while(current) {
    if(current.data === data) return true;
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
