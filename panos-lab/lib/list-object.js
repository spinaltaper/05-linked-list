'use strict';

const node=require('./node-object');

const listConstructor=module.exports={};

//List needs data, which is an array provided when it is called. 
listConstructor.List=function(data){
if(data===null)
{throw('no data inserted')}
let __length=1;
let oldNodeIndex=0;
this.head=Node(data[0]);
for(this.__length<data.length;this.__length++;)
{
    let newNode=node.Node(data[data.this.__length]);
    if(headNext==false)
        {this.head.next=newNode;}
    else
        {oldNode.head=newNode;}
    let oldNode=newNode;
}
this.end=newNode;
}

List.prototype.push=(data)=>{
    let newNode= node.Node(data);
    // let currentNode=this.head;
    // let found=false
    // while(found===false)
    // {
    //     if(currentNode.next===null)
    //     {found=true;}
    //     else
    //     {currentNode=currentNode.next;}
    // }
    this.end.next=newNode;
    this.end=newNode
    this.__length++;
}

List.prototype.searchNodeAt=(position)=>
    {
        let i=0;
        let found=false;
        while(found===false)
        { 
            if(currentNode===null)
            {return null;}
            if(i===positon)
                {return currentNode.value;}
            currentNode=currentNode.next;
        i+=1;
    }
    }

List.prototype.pop=()=>{
    let i=0;
    let end=false;
    let currentNode=this.head;
    let returnValue;
    while(end===false){
        if(currentNode.next.next===null)
        {end=true;
        returnValue=currentNode.next;
        currentNode.next=null;
        this.end=currentNode;}
        if(end===false){
        currentNode=currentNode.next;}
    }
    this.length--;
    return returnValue;
}

List.prototype.map=(callback)=>{
    let returnArray=[];
    let currentNode=this.head
    while(currentNode!==null){
    returnArray.push(callback(currentNode))
    currentNode=currentNode.next;}
    return returnArray;
}