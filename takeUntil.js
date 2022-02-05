const eqArrays = function(arr1, arr2) {
  //Compare the lenght, if different then return false
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


const takeUntil = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    //the callback function will take a value and return true or false.
    // Just calling it with "if" is implicit "if true".
    if (callback(array[i])) {
      //once true, return the original array until the index where the callback was false;
      return array.slice(0, i);
    }
  }
};

//TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
// x => x < 0 is the same as function (x) return {x < 0} which would return true or false.
console.log(results1);


assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);