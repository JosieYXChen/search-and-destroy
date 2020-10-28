"use strict";

// Complete this algo
const minJumps = (arr) => {
  //Base case: if arr[0] >= arr.length, return 1 jump
  //Calculate what the number of the arr[0] is and firgure out the first jump's potential landing points
  // add up each elemt in that landing space's total jump capacity (the number of spaces away from arr[0] + the value at that index)
  //add one to our total jumps number
  //call min Jumps recursively where the chosen index is now arr[0]
  let length = arr.length;
  let jumpValLength = arr[0];
  if (jumpValLength >= length - 1) {
    return 1;
  } else {
    let greatestNum = arr[1] + 1;
    let idx = 1;
    for (let i = 2; i <= jumpValLength; i++) {
      if (i + arr[i] > greatestNum) {
        greatestNum = i + arr[i];
        idx = i;
      }
    }
    return 1 + minJumps(arr.slice(idx));
  }
};

module.exports = minJumps;
