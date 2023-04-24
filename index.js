"use strict";
// concat: Joins two or more arrays and returns a new array.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // Output: [1, 2, 3, 4, 5, 6]
//console.log(arr3);
// every: Checks if every element in an array passes a test.
const arr4 = [1, 2, 3, 4];
const isBelowFive = (currentValue) => currentValue < 5;
const result = arr4.every(isBelowFive); // Output: true
//console.log(result);
// filter: Creates a new array with all elements that pass a test.
const arr = [1, 2, 3, 4];
const filtered = arr.filter(num => num % 2 === 0); // Output: [2, 4]
//console.log(filtered);
// find: Returns the value of the first element in an array that passes a test.
const arr5 = [1, 2, 3, 4];
const firstNumGreaterThanTwo = arr5.find(num => num > 2); // Output: 3
//console.log(firstNumGreaterThanTwo);
//findIndex: Returns the index of the first element in an array that passes a test.
const arr6 = [1, 2, 3, 4];
const firstIndexGreaterThanTwo = arr6.findIndex(num => num > 2); // Output: 2
//console.log(firstNumGreaterThanTwo);
//forEach: Calls a function for each element in an array.
const arr7 = [1, 2, 3];
//arr7.forEach(num => console.log(num)); // Output: 1, 2, 3
//console.log(arr7);
//includes: Checks if an array includes a certain element.
const arr8 = [1, 2, 3];
const includesTwo = arr8.includes(2); // Output: true
//console.log(includesTwo);
//indexOf: Returns the first index of a specified element in an array.
const arr9 = [1, 2, 3, 4, 2];
const firstIndexOfTwo = arr9.indexOf(2); // Output: 1
//console.log(firstIndexOfTwo);
// join: Joins all elements of an array into a string.
const arr10 = [1, 2, 3];
const str = arr10.join(); // Output: "1,2,3"
//console.log(str);
//lastIndexOf: Returns the last index of a specified element in an array.
const arr11 = [1, 2, 3, 4, 2];
const lastIndexOfTwo = arr11.lastIndexOf(2); // Output: 4
//console.log(lastIndexOfTwo);
//map: Creates a new array with the results of calling a function for each element in an array.
const arr12 = [1, 2, 3];
const doubled = arr12.map(num => num * 2); // Output: [2, 4, 6]
//console.log(doubled);
//pop: Removes the last element of an array and returns that element.
const arr13 = [1, 2, 3];
const lastElement = arr13.pop(); // Output: 3
//console.log(lastElement);
//push: Adds one or more elements to the end of an array and returns the new length of the array.
const arr14 = [1, 2, 3];
const newLength = arr14.push(4, 5); // Output: 5
//console.log(newLength);
//reduce
const arr15 = [1, 2, 3, 4];
const sum = arr15.reduce((accumulator, currentValue) => accumulator + currentValue); // Output: 10
//console.log(sum);
//reduceRight: Reduces an array to a single value by calling a function for each element, starting from the right and accumulating the result.
const arr16 = [1, 2, 3, 4];
const reversedSum = arr16.reduceRight((accumulator, currentValue) => accumulator + currentValue); // Output: 10
//console.log(reversedSum);
//reverse: Reverses the order of the elements in an array.
const arr17 = [1, 2, 3];
arr17.reverse(); // Output: [3, 2, 1]
//console.log(arr17);
//shift: Removes the first element of an array and returns that element.
const arr18 = [1, 2, 3];
const firstElement = arr18.shift(); // Output: 1
//console.log(firstElement);
// slice: Extracts a section of an array and returns a new array.
const arr19 = [1, 2, 3, 4];
const slicedArr = arr19.slice(1, 3); // Output: [2, 3]
//console.log(slicedArr);
// some: Checks if at least one element in an array passes a test.
const arr20 = [1, 2, 3, 4];
const isGreaterThanThree = (currentValue) => currentValue > 3;
const result_ = arr20.some(isGreaterThanThree); // Output: true
//console.log(result_);
// sort: Sorts the elements of an array.
const arr21 = [3, 1, 4, 2];
arr21.sort(); // Output: [1, 2, 3, 4]
//console.log(arr21);
// splice: Adds or removes elements from an array.
const arr22 = [1, 2, 3, 4];
arr22.splice(1, 2, 5, 6); // Output: [2, 3]
// arr is now [1, 5, 6, 4]
//console.log(arr22);
// toString: Converts an array to a string.
const arr23 = [1, 2, 3];
const str1 = arr23.toString(); // Output: "1,2,3"
//console.log(str1);
// unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
const arr24 = [1, 2, 3];
const newLength1 = arr24.unshift(4, 5); // Output: 5
// arr is now [4, 5, 1, 2, 3]
console.log(newLength1);
