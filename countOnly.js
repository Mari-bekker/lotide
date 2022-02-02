const assertEqual = function(actual, expected) {

  //Function takes in two variables and compares them if they're exactly equal.
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  //A for loop will iterate through the array of names.
  //If an item exists in items to count, we check if the item exists in the results array.
  //If it doesn't exist we add it and count it as 1, otherwise we increment it by 1.
  
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }

  return results;

};

// TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);