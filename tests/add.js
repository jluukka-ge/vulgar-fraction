const { expect } = require('chai');

const {
  create: f,
  add,
} = require('../src/index');

const print = fraction => fraction.join('/');

const data = [
  [f(1, 2), f(1, 1), f(3, 2)],    // Add one
  [f(2, 3), f(4, 3), f(2, 1)],    // Normalizes result for simple fractions
  [f(2, 3), f(-6, 3), f(-4, 3)],  // Add a negative fraction
];


const run = () => {
  describe('add', () => {
    data.forEach(([a, b, expected]) => {
      it(`calculates ${print(a)} + ${print(b)} = ${print(expected)}`, () => {
        expect(
          add(a, b)
        ).to.deep.equal(expected);
      });
    });
  });
};

module.exports = { run };
