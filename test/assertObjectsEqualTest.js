const assertObjectsEqual = require('./assertObjectsEqual');

//TEST CODE

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 }); // Pass
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 3 }); // Fail