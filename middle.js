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

const middle = function(array) {
  let middleArray = [];
  let starter = Math.floor(array.length / 2);

  if (array.length <= 2) {
    // arrays with one item or two items return null array
    return middleArray;
  } else if (array.length % 2 === 0) {
    // arrys with even numbers reuturn 2 numbers
    middleArray.push(array[starter - 1]);
    middleArray.push(array[starter]);
    return middleArray;
  } else {
    // arrays with odd numbers return 1 numbers
    middleArray.push(array[starter]);
    return middleArray;
  }
  
};

//TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);