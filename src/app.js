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
  const args = process.argv.slice(2);
  const cmd = args[0];

  if (cmd === 'welcome') {
    const name = args[1] || '';
    const greeting = args[2] || 'Welcome';
    console.log(welcome(name, greeting));
  } else if (cmd === 'product') {
    const a = Number(args[1] || 0);
    const b = Number(args[2] || 0);
    console.log(product(a, b));
  } else {
    // Backwards-compatible: if user passed two numbers without specifying 'product'
    if (!isNaN(Number(cmd)) && args.length >= 2) {
      const a = Number(cmd);
      const b = Number(args[1]);
      console.log(product(a, b));
    } else {
      // Show a simple usage help
      console.log('Usage:');
      console.log('  node src/app.js product <a> <b>        # compute a * b');
      console.log('  node src/app.js welcome [name] [greeting]  # show a welcome message');
    }
  }
}

