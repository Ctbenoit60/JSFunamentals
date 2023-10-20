// Question 1

"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
!true // 2
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // 2
" -9 " + 5 //-9 5 
" -9 " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
undefined == null // true
undefined === null // false
" \t \n" - 2 // -2




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