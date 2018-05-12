'use strict';

const node = require('./node-object');

const List = module.exports = class { //eslint-disable-line
  constructor(data) {
    this.data = data;
    // List needs data, which is an array provided when it is called. 
    if (this.data === null) {
      return null;
    }
    this.__length = 1;
    this.head = new node.Node(this.data[0]);
    if (this.data.length > 1) {
      let oldNode = new node.Node(this.data[1]);
      this.head.next = oldNode;
      console.log(this.head);
      while (this.__length < data.length) {
        const newNode = new node.Node(this.data[this.__length]);
        oldNode.next = newNode;
        oldNode = newNode;
      }
    }
    return this;
  }
  
  push(data) {
    const newNode = node.Node(data);
    this.end.next = newNode;
    this.end = newNode;
    this.__length = this.__length + 1;
  }
  
  searchNodeAt(position) {
    let i = 0;
    let currentNode = this.head;
    let searching = false;
    while (searching === false) { 
      if (currentNode === null) { searching = true; }
      if (i === position) { return currentNode.value; }
      if (i === this.__length) { searching = true; }
      currentNode = currentNode.next;
      i += 1;
    }
    return null;
  }

  pop() {
    let end = false;
    let currentNode = this.head;
    let returnValue;
    while (end === false) {
      if (currentNode.next.next === null) {
        end = true;
        returnValue = currentNode.next.value;
        currentNode.next = null;
        this.end = currentNode;
      }
      if (end === false) {
        currentNode = currentNode.next; 
      }
    }
    this.length = this.__length - 1;
    return returnValue;
  }

  map(callback) {
    const returnArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      returnArray.push(callback(currentNode));
      currentNode = currentNode.next;
    }
    return returnArray;
  }
};
