//Task 1
let arrays = [[1, 2, 3], [4, 5], [6]];

let flatenned = arrays.reduce((prev, current) => prev.concat(current), []);
console.log(flatenned);

//Task 2
const loop = (value, test, update, body) => {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  };
};

loop(3, n => n > 0, n => n - 1, console.log);

//Task 3
const every = (array, test) => {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  };
  
  return true;
};

const everyBasedOnSome = (array, test) => !array.some(el => !test(el));

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everyBasedOnSome([1, 3, 5], n => n < 10));
// → true
console.log(everyBasedOnSome([2, 4, 16], n => n < 10));
// → false
console.log(everyBasedOnSome([], n => n < 10));
// → true