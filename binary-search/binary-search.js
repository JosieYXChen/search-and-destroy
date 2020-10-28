"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  //Find the midpoint of the array
  //BASE CASE: If the array's length is equal to zero return false and if the array's length is 1 and not equal to the target return false
  //RECURSIVE CASE:
  // Determine if the target is greater or less than the mid point
  //Break array in half and recursively call the correct half (depending on whether it is greater or less than)

  // if (array.length <= 1) {
  //   return array[0] === target;
  // } else {
  //   const mid = Math.floor(array.length / 2);
  //   if (array[mid] === target) {
  //     return true;
  //   } else if (array[mid] > target) {
  //     return binarySearch(array.slice(0, mid), target);
  //   } else if (array[mid] < target) {
  //     return binarySearch(array.slice(mid), target);
  //   }
  // }

    let startPointer = 0,
    endPointer = array.length,
    midPointer = Math.floor((endPointer - startPointer) / 2);

    for(let i = 1; i < (array.length / 2) + 1; i++) {
    if (target === array[midPointer]) {
      return true;
    } else if (target > array[midPointer]) {
      startPointer = midPointer;
      midPointer = Math.floor((endPointer - startPointer) / 2) + midPointer;
    } else {
      endPointer = midPointer;
      midPointer = Math.floor((endPointer - startPointer) / 2);
    }
  }
  return false;
};




/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
