const { expect } = require('chai');

const {
  create: f,
  multiply,
} = require('../src/index');

const print = fraction => fraction.join('/');

const data = [
  [f(1, 2), f(1, 1), f(1, 2)],    // Multiply by one
  [f(2, 3), f(6, 3), f(4, 3)],    // Normalizes result for simple fractions
  [f(2, 3), f(-7, 3), f(-14, 9)],  // Multiply by negative fraction
];


const run = () => {
  describe('multiply', () => {
    data.forEach(([a, b, expected]) => {
      it(`calculates ${print(a)} * ${print(b)} = ${print(expected)}`, () => {
        expect(
          multiply(a, b)
        ).to.deep.equal(expected);
      });
    });
  });
};

module.exports = { run };
