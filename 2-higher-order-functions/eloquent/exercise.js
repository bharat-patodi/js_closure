// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
arrays.reduce((acc, curr) => acc.concat(curr), []);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(val, test, update, execute) {
  for(let i = 0; i < 3; i++) {
    test(val);
    execute(val);
    val = update(val);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function everyVariantLoop(array, test) {
  for (let val of array) {
    if (!test(val)) return false;
  }
  return true;
}

const everyVariantSome = (array, test) => !(array.some(val => !test(val)));

console.log(everyVariantLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyVariantLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyVariantLoop([], n => n < 10));
// → true

console.log(everyVariantSome([1, 3, 5], n => n < 10));
// → true
console.log(everyVariantSome([2, 4, 16], n => n < 10));
// → false
console.log(everyVariantSome([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction

// Tried it multiple times, will look at Ankit's code tomorrow and understand why it's so confusing for me.
