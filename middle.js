//Take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  let middleArray = [];
  let starter = Math.floor(array.length / 2);

  if (array.length <= 2) {
    // arrays with one item or two items return null array
    return middleArray;
  } else if (array.length % 2 === 0) {
    // arrys with even numbers reuturn 2 numbers
    middleArray.push(array[starter - 1]);
    middleArray.push(array[starter]);
    return middleArray;
  } else {
    // arrays with odd numbers return 1 numbers
    middleArray.push(array[starter]);
    return middleArray;
  }
  
};

module.exports = middle;