class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(value) {
    var node = new Node(value);
    if(!this.size) {
      this.head = node;
      this.tail = node;
      this.size += 1;
      return this;
    }
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    this.size += 1;
    return this;
  }

  contains(target) {
    if(!this.size) return 'no nodes';
    var current = this.head;
    while(current) {
      if(current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  remove(target) {
    if(!this.size) return 'no nodes';
    var remove, current = this.head;
    //if there is just the head and tail (head and tail are same)
    if(this.size === 1 && this.head.value === target) {
      remove = this.head;
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return remove.value;

    }  //if there is head, (next and tail) (size 2)
    else if(this.size === 2) {
      //if the head is removed
      if(this.head.value === target) {
        remove = this.head;
        this.head = this.tail;
        this.head.previous = null;
        this.head.next = null;
        this.size -= 1;
        return remove.value;
      }  //if the tail is removed
      else if(this.tail.value === target) {
        remove = this.tail;
        this.tail = this.head;
        this.tail.previous = null;
        this.head.next = this.tail;
        this.size -= 1;
        return remove.value;
      }
    }
    //if head is removed
    if(this.head.value === target) {
      remove = this.head;
      this.head = this.head.next;
      this.head.previous = null;
      return remove.value;
    }
    //if tail is removed
    if(this.tail.value === target) {
      remove = this.tail;
      this.tail.previous.next = null;
      this.size -= 1;
      return remove.value;
    }
    //middle node
    while(current) {
      if(current.value === target) {
        remove = current;
        current.previous = current.next;
        current.next.previous = current.previous;
        this.size -= 1;
        return remove.value;
      }
      current = current.next;
    }

    return 'target node not found'
  }
}
