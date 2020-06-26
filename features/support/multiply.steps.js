const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

console.log("running multiply");

Given("a variable set to {int}", function(number) {
  this.setTo(number);
});

When("I multiply the variable by {int}", function(int) {
  this.multiplyBy(int);
});

Then("the variable should contain {int}", function(number) {
  expect(this.variable).to.eql(number);
});
