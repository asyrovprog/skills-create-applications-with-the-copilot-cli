#!/usr/bin/env node

/**
 * calculator.js
 *
 * A simple Node.js CLI calculator supporting the four basic arithmetic
 * operations:
 *   +  Addition
 *   -  Subtraction
 *   *  Multiplication
 *   /  Division
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *
 * Example:
 *   node calculator.js 5 + 3
 *   => 8
 */

// Adds two numbers.
function add(a, b) {
  return a + b;
}

// Subtracts the second number from the first.
function subtract(a, b) {
  return a - b;
}

// Multiplies two numbers.
function multiply(a, b) {
  return a * b;
}

// Divides the first number by the second. Throws on division by zero.
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

// Maps supported operator symbols to their corresponding functions.
const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
};

// Parses CLI args, runs the requested operation, and prints the result.
function main() {
  const [rawA, operator, rawB] = process.argv.slice(2);

  if (rawA === undefined || operator === undefined || rawB === undefined) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Supported operators: + - * /');
    process.exit(1);
  }

  const a = Number(rawA);
  const b = Number(rawB);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: both operands must be valid numbers.');
    process.exit(1);
  }

  const operation = operations[operator];

  if (!operation) {
    console.error(`Error: unsupported operator "${operator}". Use one of + - * /`);
    process.exit(1);
  }

  try {
    console.log(operation(a, b));
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

// Only run the CLI when executed directly (not when required as a module).
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
