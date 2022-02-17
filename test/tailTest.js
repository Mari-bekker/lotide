const tail = require('../tail');
// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

//TEST CODE

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});