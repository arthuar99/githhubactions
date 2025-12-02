const assert = require('assert');
const { welcome } = require('../src/app');

// Basic welcome tests
assert.strictEqual(welcome(), 'Welcome!', 'No name should return generic welcome');
assert.strictEqual(welcome(''), 'Welcome!', 'Empty string should return generic welcome');
assert.strictEqual(welcome('Alice'), 'Welcome, Alice!', 'Should include name when provided');
assert.strictEqual(welcome('  Bob  '), 'Welcome, Bob!', 'Should trim whitespace around name');
assert.strictEqual(welcome(123), 'Welcome, 123!', 'Non-string values should be coerced to string');
// custom greetings
assert.strictEqual(welcome('Alice', 'Hello'), 'Hello, Alice!', 'Custom greeting should replace the default');
assert.strictEqual(welcome('Bob', ''), 'Welcome, Bob!', 'Empty greeting should default to Welcome');
assert.strictEqual(welcome('Kim', 123), '123, Kim!', 'Non-string greeting should be coerced to string');

console.log('All welcome tests passed.');
