const eqObjects = require('./eqObjects');

//Takes in 2 objects and compares if the contents are teh same.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let compare = eqObjects(actual, expected);
  
  if (compare === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;