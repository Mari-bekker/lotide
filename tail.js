const assertEqual = function(actual, expected) {

  //Function takes in two variables and compares them if they're exactly equal.
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//Function will loop through a given array and push all elements to a new one, except the first.
const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    let newArr = [];
    newArr.push(arr[i]);
  }
  return newArr;
};

//TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], ["Lighthouse", "Labs"][0]); // => will always fail!
assertEqual(result[1], ["Lighthouse", "Labs"][1]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!