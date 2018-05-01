// Check for number of nodes in list in 3 circumstances for __length
// Check that the node at __length is the same as one the test generates from the given data.
// Check that the node at a given position is the same as one generated inside the test.
// Remove a node and check if the new node at that position is one provided by the test.

const list=require('./lib/list-object.js');

const node=require('./lib/list-object.js');

describe('Node Test',()=>{
    test('Node constructor function returns properly formatted object',()=>
    expect(node.Node(12).toequal({value=12,next={}})))})
})
describe('List Tests',()=>{
    let testList=list.List([0,1,2,3,4])
    test('Checking .searchNodeAt()',()=>{
        expect(testList.prototype.searchNodeAt(1).toequal(1)))
        expect(testList.prototype.searchNodeAt(4).toequal(4)))
        expect(testList.prototype.searchNodeAt(0).toequal(0)))});

    test('Checking __length of 3 different lists',()=>{
        expect(list.List([0,1,2]).__length.toequal(2))
        expect(testList.prototype.__length.toequal(4))
        expect(list.List([]).__length.toequal(undefined))
    })
    test('Checking .push 3 times',()=>{
        testList.prototype.push(6);
        expect(testList.end.value.toequal(6));
        expect(testList.__length.toequal(6));

        let testList1=list.List([0]);
        testList1.prototype.push(1);
        expect(testList1.end.value.toequal(1);
        expect(testList1.__length.toequal(1);
        
        testList.prototype.push(7);
        expect(testList.end.value.toequal(7));
        expect(testList.__length.toequal(7));))
    })
    
    test('Checking .pop 3 times',()=>{
        expect(testList.prototype.pop().toequal(7))
        expect(testList.__length.toequal(6);)

        expect(testList.prototype.pop().toequal(6))
        expect(testList.__length.toequal(5);)

        let testList1=list.List([0]);
        expect(testList.prototype.pop().toequal(0));
        expect(testList.__length.toequal(-1);)
    })

}
