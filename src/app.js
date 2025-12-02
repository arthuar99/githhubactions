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

/**
 * Returns a welcome message. If a name is provided, include it: "<greeting>, <name>!";
 * otherwise just "<greeting>!". Greeting defaults to 'Welcome'.
 * @param {string} [name]
 * @param {string} [greeting='Welcome']
 * @returns {string}
 */
function welcome(name = '', greeting = 'Welcome') {
  if (typeof name !== 'string') {
    name = String(name);
  }
  if (typeof greeting !== 'string') {
    greeting = String(greeting);
  }
  name = name.trim();
  greeting = greeting.trim();
  // default back to 'Welcome' if greeting becomes empty
  if (!greeting) greeting = 'Welcome';
  return name ? `${greeting}, ${name}!` : `${greeting}!`;
}

module.exports = { product, welcome };

// Optional: simple CLI so you can run this file directly:
if (require.main === module) {
  const [,, argA, argB] = process.argv;
  const a = Number(argA || 0);
  const b = Number(argB || 0);
  console.log(product(a, b));
}

