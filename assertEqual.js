const assertEqual = function(actual, expected) {

  //Function takes in two variables and compares them if they're exactly equal.
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

module.exports = assertEqual;

