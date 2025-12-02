#!/usr/bin/env bash
# test.sh — runs simple JS tests for src/app.js
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required to run tests. Please install Node.js (https://nodejs.org/)." >&2
  exit 1
fi

echo "Running tests in $SCRIPT_DIR/test..."
if [ ! -d "$SCRIPT_DIR/test" ]; then
  echo "No test directory found at $SCRIPT_DIR/test" >&2
  exit 1
fi

# Run all .js test files in the test/ directory (simple runner)
failed=0
for t in "$SCRIPT_DIR"/test/*.js; do
  [ -e "$t" ] || continue
  echo "-- Running $(basename "$t")"
  if ! node "$t"; then
    failed=1
    echo "Test $(basename "$t") failed" >&2
  fi
done

if [ "$failed" -ne 0 ]; then
  echo "One or more tests failed." >&2
  exit 2
fi

echo "All tests passed! "
exit 0
