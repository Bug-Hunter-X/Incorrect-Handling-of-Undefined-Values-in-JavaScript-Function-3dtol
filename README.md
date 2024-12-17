# Incorrect Handling of Undefined Values in JavaScript Function

This repository demonstrates a common error in JavaScript: improperly handling undefined values.

The `foo` function adds two numbers.  It correctly handles `null` inputs, but fails when dealing with `undefined` inputs.  This can lead to unexpected behavior or runtime errors.

The `bug.js` file contains the buggy code.  The `bugSolution.js` demonstrates how to correct the issue by explicitly checking for both `null` and `undefined` values.