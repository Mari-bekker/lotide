# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mari-bekker/lotide`

**Require it:**

`const _ = require('@mari-bekker/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Takes in two arrays and returns if they are or aren't equal, print out result in user friendly way. 
* `assertEqual`: Takes in 2 variables and compares if they are exactly the same. 
* `assertObjectsEqual`: Takes in 2 objects and compares if the contents are teh same, print out in a user friendly way. 
* `countLetters`: Returns the count of each of the letters in the sentence.
* `countOnly`: Take in a collection of items and return counts for a specific subset of those items.
* `eqArrays`: Compare if two arrays are the same. 
* `eqObjects`: Take two objects and return if they are the same. 
* `findKey`: Scan an object and return the first key for which the callback returns a truthy value.
* `findKeyByValue`: Given an object and a value, return the key to which the value belongs. 
* `flatten`: Given an array with nested arrays - return one big array with no nested arrays.
* `head`: Return the first item in a given array.
* `letterPositions`: Function will take in a sentence and return all the positions in the setence, starting with 0.
* `map`: Function will return a new array based on the results of the callback function.
* `middle`: Take in an array and return the middle-most element(s) of the given array.
* `tail`: loop through a given array and push all elements to a new one, except the first.
* `takeUntil`: function will take in an array and a callback with a condition. Return a slice of the array until the index where callback condition was met.
* `without`: Function will take in an array and specific items to remove from it. Return an array without the items specified for removal. 


