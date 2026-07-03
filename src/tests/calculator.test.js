const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('add', () => {
  test('2 + 3 = 5 (example from calc-basic-operations.png)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 5)).toBe(15);
  });

  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('adds a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds zero', () => {
    expect(add(0, 7)).toBe(7);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
  });
});

describe('subtract', () => {
  test('10 - 4 = 6 (example from calc-basic-operations.png)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts a larger number from a smaller one (negative result)', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracts zero', () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.25)).toBeCloseTo(3.25);
  });
});

describe('multiply', () => {
  test('45 * 2 = 90 (example from calc-basic-operations.png)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('multiplies by zero', () => {
    expect(multiply(9, 0)).toBe(0);
  });

  test('multiplies negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(1.5, 2)).toBeCloseTo(3);
  });
});

describe('divide', () => {
  test('20 / 5 = 4 (example from calc-basic-operations.png)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides negative numbers', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('divides a positive by a negative number', () => {
    expect(divide(10, -2)).toBe(-5);
  });

  test('divides decimal numbers', () => {
    expect(divide(7.5, 2.5)).toBeCloseTo(3);
  });

  test('returns 0 when dividing 0 by a non-zero number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });
});

describe('modulo', () => {
  test('10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns 0 when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('works with negative dividend', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('works with decimal numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed.');
  });
});

describe('power', () => {
  test('2 ** 8 = 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('any number to the power of 0 is 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('any number to the power of 1 is itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('handles negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('handles fractional exponent (square root via power)', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

describe('squareRoot', () => {
  test('sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('sqrt(0) = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('sqrt(2) is approximately 1.414', () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed.');
  });
});
