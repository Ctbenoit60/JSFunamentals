// Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
//  and b. What does the ‘+=’ do?

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }

let a = 5,
  b = 5;
let result = `${a} + ${b} is ${
  a + b < 10 ? "less than 10" : "greater than 10"
}`;

console.log(result);

// the += operator is just a short cut to make the new value the old value added to another variable. Ex. (x= x+y) would be written (x += y)