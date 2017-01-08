//trees have root node and 0 or more child nodes
//be aware of if it is a tree or a binary Tree
//is it balanced?
//complete: every level fully filled
//full: 0 or 2 children per node, none with just none//perfect means full and complete


class Tree {
  constructor(rootValue) {
    this.value = rootValue;
    this.children = []
  }
}

 var tree = new Tree(2);

 Tree.prototype.addChild = function(value) {
   var node = new Tree(value);
   this.children.push(node);
 }

 tree.addChild(3);
 tree.addChild(4);
 tree.children[0].addChild(5);
 tree.children[1].addChild(6);
 tree.children[1].addChild(7);
 tree.children[1].addChild(8);
// console.log(tree.children[1])

 //left then root then right
Tree.prototype.inOrderTraverse = function(callback) {
  if(this) {
    this.children.forEach((child)=>{child.inOrderTraverse(callback)})
    callback(this);
  }
}


//current before children
Tree.prototype.preOrderTraverse = function(cb) {
 if(this) {
   cb(this);
   this.children.forEach((child)=>{child.preOrderTraverse(cb)})
 }
}


tree.preOrderTraverse(function(node){console.log(node.value)})


//children before current
Tree.prototype.postOrderTraverse = function(value) {

}

class BinaryTree {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
  add(v) {
    var node = new BinaryTree(v);
    if(v > this.value) {
      !this.right ? this.right = new BinaryTree(v) : this.right.add(v);
    } else if(v < this.value) {
      !this.left ? this.left = new BinaryTree(v) : this.left.add(v);
    } else {
      return `can't add the same value`;
    }
  }
}
var bt = new BinaryTree(10);
bt.add(20);
bt.add(5)
// console.log(bt)
