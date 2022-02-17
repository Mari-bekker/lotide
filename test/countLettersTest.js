const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');

//TEST CODE

const check = countLetters("Hello Lighthouse this is a test string");

assertEqual(check["h"], 4);
assertEqual(check["q"], undefined);
assertEqual(check["o"], 2);
assertEqual(check[" "], undefined);
