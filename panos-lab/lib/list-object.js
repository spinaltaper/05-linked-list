'use strict';

const node=require('./node-object')

const listArray=[];

const listConstructor=module.exports={};

//List needs data, which is an array provided when it is called. 
listConstructor.List=function(data){
let __length=0;
let oldNodeIndex=0;
this.head=data[0];
for(__length<data.length;__length++;)
{let newNode=new Node(data[data.__length],__length);
    if(length>0)
    {
        listArray[oldNodeIndex].next=newNode;
        oldNodeIndex=length-1;
    }
}

List.prototype.push=(data)=>{
    let currentNode=this.head;
    let newNode=new Node(data);
    let found=false
    while(found===false)
    {
        if(currentNode.next===null)
        {found=true;}
        else
        {currentNode=currentNode.next;}
    }
    currentNode.next=newNode;
    listArray.push(newNode);
    this.__length+=1;
}

List.prototype.searchNodeAt=(position)=>
    {
        let i=0;
        let found=false;
        while(found===false)
        { 
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
        currentNode.next=null;}
        currentNode=currentNode.next;
    }
    return returnValue;
}