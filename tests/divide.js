const { expect } = require('chai');

const {
  create: f,
  divide,
} = require('../src/index');

const print = fraction => fraction.join('/');

const data = [
  [f(1, 2), f(1, 1), f(1, 2)],    // Divide by one
  [f(2, 6), f(6, 2), f(1, 9)],    // Normalizes result for simple fractions
  [f(1, 1), f(1, -2), f(-2, 1)],   // Divide by negative fraction
];


const run = () => {
  describe('divide', () => {
    data.forEach(([a, b, expected]) => {
      it(`calculates ${print(a)} / ${print(b)} = ${print(expected)}`, () => {
        expect(
          divide(a, b)
        ).to.deep.equal(expected);
      });
    });
  });
};

module.exports = { run };
