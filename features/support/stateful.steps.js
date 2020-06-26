const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

const numbers = [];
let last;
async function getLast() {
  return numbers[numbers.length - 1];
}
Given("that I add {int} to the array", function(int) {
  numbers.push(int);
});

When("getting the last item", async function() {
  last = await getLast();
});

Then("the number should be {int}", function(int) {
  expect(last).to.eql(int);
});
