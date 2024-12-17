function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This handles null values, but not undefined
  } else {
    return a + b; 
  }
}