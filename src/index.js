const gdc = require('greatest-common-divisor');

const NUMERATOR = 0;
const DENOMINATOR = 1;

const create = (numerator, denominator) => [numerator, denominator];
const createOne = () => create(1, 1);
const createZero = () => create(0, 1);

const isVulgarFraction = fraction =>
  Array.isArray(fraction) &&
  fraction.length === 2 &&
  Number.isInteger(fraction[NUMERATOR]) &&
  Number.isInteger(fraction[DENOMINATOR]);

const isPositive = fraction =>
  (fraction[NUMERATOR] >= 0 && fraction[DENOMINATOR] >= 0) ||
  (fraction[NUMERATOR] < 0 && fraction[DENOMINATOR] < 0);

const isOne = fraction => isVulgarFraction(fraction) && fraction[NUMERATOR] === fraction[DENOMINATOR];

const isZero = isVulgarFraction(fraction) && fraction[NUMERATOR] === 0;

const expand = (fraction, scale) => create(fraction[NUMERATOR] * scale, fraction[DENOMINATOR] * scale);

const reduce = fraction => {
  const numerator = fraction[NUMERATOR];
  const denominator = fraction[DENOMINATOR];

  const factor = gdc(numerator, denominator);

  return create(
    numerator / factor,
    denominator / factor,
  );
};

const simplifySign = fraction => {
  const absoluteNumerator = Math.abs(fraction[NUMERATOR]);
  const absoluteDenominator = Math.abs(fraction[DENOMINATOR]);

  return create(
    (isPositive(fraction) ? absoluteNumerator : -absoluteNumerator),
    absoluteDenominator,
  );
};

const simplify = fraction => {
  return simplifySign(
    reduce(fraction)
  );
};

const inverse = fraction => create(fraction[DENOMINATOR], fraction[NUMERATOR]);

const negate = fraction => create(-fraction[NUMERATOR], fraction[DENOMINATOR]);

const toNumber = fraction => fraction[NUMERATOR] / fraction[DENOMINATOR];

const multiply = (a, b) => {
  const numerator = a[NUMERATOR] * b[NUMERATOR];
  const denominator = a[DENOMINATOR] * b[DENOMINATOR];

  const fraction = create(numerator, denominator);

  return simplify(fraction);
};

const divide = (a, b) => {
  const inverseB = inverse(b);
  return multiply(a, inverseB);
};

const add = (a, b) => {
  const expandedA = expand(a, b[DENOMINATOR]);
  const expandedB = expand(b, a[DENOMINATOR]);

  const numerator = expandedA[NUMERATOR] + expandedB[NUMERATOR];

  const fraction = create(numerator, expandedA[DENOMINATOR]);

  return simplify(fraction);
};

const subtract = (a, b) => {
  const negatedB = negate(b);
  return add(a, negatedB);
};

module.exports = {
  // Constants
  NUMERATOR,
  DENOMINATOR,

  // Type representation
  create,
  isVulgarFraction,

  // Arithmetic operations
  multiply,
  divide,
  add,
  subtract,

  // Other operations
  expand,
  reduce,
  simplifySign,
  simplify,
  inverse,
  negate,

  // Elements
  createOne,
  createZero,
  isOne,
  isZero,

  // Utilities
  isPositive,
  toNumber,
};
