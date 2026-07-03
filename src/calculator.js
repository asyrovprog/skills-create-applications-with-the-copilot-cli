#!/usr/bin/env node

/**
 * calculator.js
 *
 * A simple Node.js CLI calculator supporting:
 *   +     Addition
 *   -     Subtraction
 *   *     Multiplication
 *   /     Division
 *   %     Modulo
 *   **    Exponentiation (power)
 *   sqrt  Square root (unary: node calculator.js sqrt <number>)
 *
 * Usage (binary):
 *   node calculator.js <number1> <operator> <number2>
 *
 * Usage (unary sqrt):
 *   node calculator.js sqrt <number>
 *
 * Examples:
 *   node calculator.js 5 + 3    => 8
 *   node calculator.js 10 % 3   => 1
 *   node calculator.js 2 ** 8   => 256
 *   node calculator.js sqrt 16  => 4
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

// Returns the remainder of a divided by b. Throws on modulo by zero.
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }
  return a % b;
}

// Returns base raised to the power of exponent.
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Returns the square root of n. Throws for negative numbers.
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }
  return Math.sqrt(n);
}

// Maps supported binary operator symbols to their functions.
const operations = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide,
  '%': modulo,
  '**': power,
};

// Parses CLI args, runs the requested operation, and prints the result.
function main() {
  const args = process.argv.slice(2);

  // Unary: node calculator.js sqrt <number>
  if (args[0] === 'sqrt') {
    const n = Number(args[1]);
    if (args[1] === undefined || Number.isNaN(n)) {
      console.error('Usage: node calculator.js sqrt <number>');
      process.exit(1);
    }
    try {
      console.log(squareRoot(n));
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  const [rawA, operator, rawB] = args;

  if (rawA === undefined || operator === undefined || rawB === undefined) {
    console.error('Usage: node calculator.js <number1> <operator> <number2>');
    console.error('Supported operators: + - * / % **');
    console.error('Unary: node calculator.js sqrt <number>');
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
    console.error(`Error: unsupported operator "${operator}". Use one of + - * / % **`);
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
