// src/app.js
// A simple utility to compute the product of two numbers.

/**
 * Returns the product of two numbers.
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} product of a and b
 */
function product(a, b) {
  return a * b;
}

module.exports = { product };

// Optional: simple CLI so you can run this file directly:
if (require.main === module) {
  const [,, argA, argB] = process.argv;
  const a = Number(argA || 0);
  const b = Number(argB || 0);
  console.log(product(a, b));
}
