const eqArrays = function(arr1, arr2) {
  //Compare the length, if different then return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  //Compare each item one by one and if one doesn't match return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;

    }

  }
  return true;

};

const assertArraysEqual = function(arr1, arr2) {
  //Take in 2 arrays and call the function eqArrays to compare
  //console.log similar to the assertEqual

  let compare = eqArrays(arr1, arr2);
  
  if (compare === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = function(arr) {
  //return one big array with no nested arrays
  let newArr = [];

  //Iterate each item and check if array. if it's not, push to new array, if yes
  //Create a second for loop to iterate through that array and push it to the resultant arr

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let y = 0; y < arr[i].length; y++) {
        newArr.push(arr[i][y]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;

};

module.exports = flatten;

// TEST CODE

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6];

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);