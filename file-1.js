/* 
Problem 1. Give an array of integers, replace all the occurences of elementToReplace with subtractionElem.
Ex: For inputArray = [1,2,1], elementToReplace = 1 and subtractionElem = 3, the output should be
arrayReplace(inputArray, elementToReplace,substractionElem) = [3,2,3] 
 */

// ## solution 1.1 .
function convertFn1(arr, matchedEl, replaceEl) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === matchedEl) {
      arr[i] = replaceEl; // replace position i value if it matched with the matchedEl.
    }
  }
  return arr;
}

// ## solution 1.2.
function convertFn2(arr, matchedEl, replaceEl) {
  arr.forEach((el, index) => {
    if (el === matchedEl) arr[index] = replaceEl; // replace arr el by index if arr el matched with the matchedEl
  });
  return arr;
}

// ## solution 1.3.
const convertFn3 = (arr, m, r) => arr.map((el) => (el === m ? r : el)); // m = matchedElement, r = replachedElement.
/* map will create a new array by iterating each element and returning them. If el matched to the matchedEl then
  it will return replaceEl value or it will return the el value. At last the new will be returned by the function. */

// console.log(convertEl([1, 2, 1], 1, 3));

/*
Problem 2. Write a function that returns the sum of all numbers regardless of # of params.
*/

// ## solution 2.1
function getSumFn1(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// ## solution 2.2
const getSumFn2 = (...nums) => nums.reduce((total, num) => total + num, 0);
// console.log(getSumFn2(2, 4, 4, 5));
