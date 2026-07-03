const test = require('node:test');
const assert = require('node:assert/strict');

const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

test('addition: add returns the sum', () => {
  assert.equal(add(2, 3), 5);
});

test('subtraction: subtract returns the difference', () => {
  assert.equal(subtract(5, 2), 3);
});

test('multiplication: multiply returns the product', () => {
  assert.equal(multiply(4, 3), 12);
});

test('division: divide returns the quotient', () => {
  assert.equal(divide(12, 3), 4);
});

test('division: divide throws for zero divisor', () => {
  assert.throws(() => divide(5, 0), /Division by zero is not allowed\./);
});

test('modulo returns remainder', () => {
  assert.equal(modulo(10, 3), 1);
});

test('modulo throws for zero divisor', () => {
  assert.throws(() => modulo(10, 0), /Modulo by zero is not allowed\./);
});

test('power returns base raised to exponent', () => {
  assert.equal(power(2, 4), 16);
});

test('square root returns positive root', () => {
  assert.equal(squareRoot(81), 9);
});

test('square root throws for negative input', () => {
  assert.throws(
    () => squareRoot(-1),
    /Square root of negative numbers is not allowed\./,
  );
});
