const { expect } = require('chai');

const {
  create: f,
  subtract,
} = require('../src/index');

const print = fraction => fraction.join('/');

const data = [
  [f(1, 2), f(1, 1), f(-1, 2)],  // Subtract one
  [f(8, 3), f(2, 3), f(2, 1)],   // Normalizes result for simple fractions
  [f(2, 3), f(-6, 3), f(8, 3)],  // Subtract a negative fraction
];


const run = () => {
  describe('subtract', () => {
    data.forEach(([a, b, expected]) => {
      it(`calculates ${print(a)} - ${print(b)} = ${print(expected)}`, () => {
        expect(
          subtract(a, b)
        ).to.deep.equal(expected);
      });
    });
  });
};

module.exports = { run };
