const assert = require('assert');
const { product } = require('../src/app');

// Basic product tests
assert.strictEqual(product(2, 3), 6, '2 * 3 should be 6');
assert.strictEqual(product(-2, 3), -6, '-2 * 3 should be -6');
assert.strictEqual(product(0, 5), 0, '0 * 5 should be 0');
assert.strictEqual(product(2.5, 2), 5, '2.5 * 2 should be 5');

// Validation tests
try {
    product('2', 3);
    console.error('Should have thrown error for string input');
    process.exit(1);
} catch (e) {
    assert.strictEqual(e.message, 'Inputs must be numbers');
}

try {
    product(2, '3');
    console.error('Should have thrown error for string input');
    process.exit(1);
} catch (e) {
    assert.strictEqual(e.message, 'Inputs must be numbers');
}

console.log('All product tests passed.');
