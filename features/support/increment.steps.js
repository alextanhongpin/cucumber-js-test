const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");

When("I increment the variable by {int}", function(number) {
  this.incrementBy(number);
});
