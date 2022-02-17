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

module.exports = countLetters;