"use strict";

//Complete this algo
const isLoop = (linkedlist) => {};
// create an empty hash table/object (bank)
// creat a loop to walk through the list until the next value is null
// add linkedList element value as key to object
// if key’s value undefined/null, key value  = 1
// if key exist, return true to avoid looping through the object
// increment the current node by going to its next node;
const charBank = {};
let currentHead = linkedlist.head;
while (currentHead) {
  if (charBank[currentHead.value]) return true;
  else charBank[currentHead.value] = 1;
  currentHead = currentHead.next;
}
return false;
/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
