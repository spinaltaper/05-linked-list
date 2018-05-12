'use strict';

const node = module.exports = {};

node.Node = function Node(value) {
  this.value = value;
  this.next = {};
  return this;
};
