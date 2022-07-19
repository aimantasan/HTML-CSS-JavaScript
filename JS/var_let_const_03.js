// Var / Let /Const

// Var has been depricated, but a lot of websites are still using it.
// Issues with function and conditional statement.

var person = 'Sara';
console.log(person);

// Changing data from the same variable.
person ='Kim';
// Value has been changed, console just print data from before.
console.log(person);

// How to name a variable
// Letter, Number, $, _
// Variable name cannot start with numbers.

// Initializaing the variable , declaring without value.
// Value and the referrence could be changed.
let student;
// Undefined is returned as there are no value is placed.
console.log(student);

// Assigning Value to Variables
student = 'John';
console.log(student);

// Using Const
// Value could be changed but the reference cannot be changed.

// We cannot initialize a variable with const, we could not reassign it.
// const student01;
const student01 = 'Sara';
console.log(student01);
// student01 = 'John'; // Could not reassign the value to const.

// Conventions of multi words variable naming
let firstName = 'Sara'; //camelCase
let first_name = 'Kim'; //underscore
let FirstName = 'John'; //PascalCase




