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

const letterPositions = function(sentence) {
  //Function will take in a sentence and return all the positions in the setence, starting with 0.
  sentence = sentence.toLowerCase();
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//TEST CODE

assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);

console.log(letterPositions("lighthouse in the house"));