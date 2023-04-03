function hasTargetSum(array, target) {
  // Write your algorithm here
for (let i = 0; i < arr.length; i++) {
for (let j = i + 1; j < arr.length; j++) {
if (arr[i] + arr[j] === target) {
return true;
}
}
}
return false;
}




 function hasTargetSum(arr, target) {
const complementMap = {};
for (let i = 0; i < arr.length; i++) {
const complement = target - arr[i];
if (complementMap[complement]) {
return true;
}
complementMap[arr[i]] = true;
}
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Create a function called hasTargetSum that takes an array of integers and a target integer as arguments.
Loop through the array of integers.
For each element in the array, check if there exists another element in the array such that the sum of the two elements is equal to the target integer.
If such a pair exists, return true.
If the loop completes and no pair is found, return false.
11
*/

/*
  Add written explanation of your solution here
  function hasTargetSum(arr, target) {
let seen = new Set();
for (let i = 0; i < arr.length; i++) {
let difference = target - arr[i];
if (seen.has(difference)) {
return true;
}
seen.add(arr[i]);
}
return false;
}
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
module.exports = hasTargetSum;