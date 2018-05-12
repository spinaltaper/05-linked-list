// Check for number of nodes in list in 3 circumstances for __length
// Check that the node at __length is the same as one the test generates from the given data.
// Check that the node at a given position is the same as one generated inside the test.
// Remove a node and check if the new node at that position is one provided by the test.

const List = require('../lib/list-object.js');

const node = require('../lib/node-object.js');

describe('Node Test', () => {
  test('Node constructor function returns properly formatted object', () =>
    expect(node.Node(12).value).toEqual(12));
});

describe('List Tests', () => {
  const testList = new List([0, 1, 2, 3, 4]);
  console.log(testList.head);
  console.log(testList);
  test.only('Checking .searchNodeAt()', () => {//eslint-disable-line
    expect(testList.searchNodeAt(1)).toEqual(1);
    expect(testList.searchNodeAt(4)).toEqual(4);
    expect(testList.searchNodeAt(0)).toEqual(0);
  });

  test('Checking __length of 3 different lists', () => {
    expect(testList.List([0, 1, 2]).__length).toEqual(2);
    expect(testList.__length).toEqual(4);
    expect(testList.List([]).__length).toEqual(undefined);
  });
  test('Checking .push 3 times', () => {
    testList.push(6);
    expect(testList.end.value).toEqual(6);
    expect(testList.__length).toEqual(6);
    testList.push(7);
    expect(testList.end.value).toEqual(7);
    expect(testList.__length).toEqual(7);
    testList.push(8);
    expect(testList.end.value).toEqual(8);
    expect(testList.__length).toEqual(8);
  });
    
  test('Checking .pop 3 times', () => {
    expect(testList.pop()).toEqual(8);
    expect(testList.__length).toEqual(7);

    expect(testList.pop()).toEqual(7);
    expect(testList.__length).toEqual(6);

    expect(testList.pop()).toEqual(6);
    expect(testList.__length).toEqual(5);
  });
});
