const assertEqual = function(actual, expected) {

  //Function takes in two variables and compares them if they're exactly equal.
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(sentence) {
  //return count of each of the letters in the sentence.
  sentence = sentence.toLowerCase();
  let results = {};
  for (const item of sentence) {
    if (item !== " ") {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

//TEST CODE

const check = countLetters("Hello Lighthouse this is a test string");

assertEqual(check["h"], 4);
assertEqual(check["q"], undefined);
assertEqual(check["o"], 2);
assertEqual(check[" "], undefined);
