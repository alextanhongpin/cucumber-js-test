const { setWorldConstructor } = require("cucumber");

console.log("setting world");
class CustomWorld {
  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }

  multiplyBy(number) {
    this.variable *= number;
  }
}

setWorldConstructor(CustomWorld);
