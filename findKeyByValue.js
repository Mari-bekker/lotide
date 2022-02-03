const assertEqual = function(actual, expected) {

  //Function takes in two variables and compares them if they're exactly equal.
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function (object, value) {
  //iterate the object and return the first key that contains the given value.
  //if it can't find a key with the value, should return undefined.
  for (const item in object) {
    if (object[item] === value) {
      return item;
    }
  }
  return undefined;
};


//TEST CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Doctor who"), undefined);

//Alternative implementation:

// const findKeyByValue = function(object, value) {
//   let keys = Object.keys(object);
//   let result = "";
//   for (const key of keys) {
//     if (object[key] === value) {
//       result = key;
//     }
//   }
//   return undefined;
// };