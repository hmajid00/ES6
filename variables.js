// 'var' allows for re-declarations in code, which does not throw errors.

// 'let' allows for variable reassignment but not for duplicate declarations.

// 'const' allows for declaration once and for assignment once, and can never be re-declared or reassigned.

// 'var' declarations are globally scoped or function scoped while 'let' and 'const' are block scoped.

/* Javascript compiles all of your code, all variable declarations using "var" are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what is mean by “hoisting”. 
*/

// Variable Hoisting
var name = "Hira Majid";
function myName() {
	var name; //declaration
	name = "Hira"; // initialization
	console.log(name);
}
myName();
console.log(name);

// Variable Declaration with let and const

var x = 14; 
x = 12;
console.log(x);
// From the above code we successfully changed the value of variable from 14 to 12

let y = 10;
y = 8;
console.log(y);
// From the code above we successfully changed the value of variable from 10 to 8.

const z = 8;
//z = 6;
console.log(z); 
// From the code above with const when we run the program got the type error that value of const cannot be changed.