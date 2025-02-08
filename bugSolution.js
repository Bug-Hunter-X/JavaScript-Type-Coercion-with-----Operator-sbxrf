function foo(a, b) {
  //Explicit type checking and conversion
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input: both arguments must be numbers';
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: 'Invalid input: both arguments must be numbers'