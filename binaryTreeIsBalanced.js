class BinaryTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

BinaryTree.prototype.add = function(val) {
  var node = new BinaryTree(val);
  if(val === this.value) return 'duplicate value';
  if(val < this.value) {
    if(!this.left) {
      this.left = node;
      return;
    }
    this.left.add(val);
  } else if (val > this.value) {
    if(!this.right) {
      this.right = node;
      return;
    }
    this.right.add(val);
  }
}
// A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.
BinaryTree.prototype.isBalanced = function() {
  //max - min <= 1
  var min = minDepth(this);
  var max = maxDepth(this);
  return (max - min <= 1)
}

function minDepth(node) {
  if (!node) {
    return 0;
  }
  //minimum min depth is 1
  return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}
function maxDepth(node) {
  if (!node) {
    return 0;
  }
  //minimum max depth is 1
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

// var bt = new BinaryTree(50);
// bt.add(40);
// bt.add(60);
// bt.add(30);
// bt.add(20);
// bt.isBalanced();
