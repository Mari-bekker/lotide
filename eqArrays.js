const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  // first we compare the lenghs, if different then return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // then we compare each item one by one and if one doesn't match return false

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;

    }

  }
  return true;

};

module.exports = eqArrays;