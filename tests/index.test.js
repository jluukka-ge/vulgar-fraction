const { expect } = require('chai');

const { run: runMultiplyTests } = require('./multiply');
const { run: runDivideTests } = require('./divide');
const { run: runAddTests } = require('./add');
const { run: runSubtractTests } = require('./subtract');


describe('Vulgar Fractions', () => {
  runMultiplyTests();
  runDivideTests();
  runAddTests();
  runSubtractTests();
});
