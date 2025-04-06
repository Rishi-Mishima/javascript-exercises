//  npm test calculator.spec.js 
const add = function (a, b) {

  const result = a + b;
  return result;
};

const subtract = function (a, b) {
  const result = a - b;
  return result;

};

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  return total;


};

const power = function (a, b) {

};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
