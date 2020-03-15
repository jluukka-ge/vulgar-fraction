# Vulgar Fractions

A library for representing and operating with common fractions.

The method for representing this data type stems from category theory, in which values of the type are related to, but
separate from the operations defined for the type. Special elements for numeric value one and zero are defined to cater
for situations, where a _zero element_ may be required.

## Install

```
npm install @iekedemus/vulgar-fraction
```

## Usage

```
const {
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
} = require('@iekedemus/vulgar-fraction');


// Type representation
const a = create(1, 2);  // (1/2)
const isVulgar = isVulgarFraction(a);  // true

// Elements
const b = createOne();  // (1/1)
const z = createZero();  // (0/1)
const fractionIsOne = isOne(z);  // false
const fractionIsZero = isZero(z);  // true

// Arithmentic operations
const sum = add(a, b);  // (3/2)
const difference = subtract(a, b);  // (-1/2)
const product = multiply(a, b);  // (1/2)
const quotient = divide(a, b);  // (1/2)

// Other operations
const expanded = expand(a, 2);  // (2/4)
const reduced = reduce([2, 4]);  // (1/2)
const signSimplified = simplifySign([1, -2]);  // (-1/2)
const simplified = simplify([2, -4]);  // (-1, 2)
const inversed = inverse(a);  // (2/1)
const negated = negate(a);  // (-1/2)

// Utility functions
const positive = isPositive(a);  // true
const asNumber = toNumber(a);  // 0.5

// Constants
const numerator = a[NUMERATOR];  // 1
const denominator = a[DENOMINATOR]  // 2
```

## Test

```
npm run test
```

## License

MIT
