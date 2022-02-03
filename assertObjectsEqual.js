const eqObjects = function(object1, object2) {
  //objects equal when:
  //They have the same number of keys
  //The value for each key in one object is the same as the value for that same key in the other object

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let compare = eqObjects(actual, expected);
  
  if (compare === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODE

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 }); // Pass
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 3 }); // Fail