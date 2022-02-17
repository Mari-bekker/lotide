//Function will loop through a given array and push all elements to a new one, except the first.
const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

module.exports = tail;