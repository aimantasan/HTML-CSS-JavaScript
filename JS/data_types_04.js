// In JS, categories: primitives & reference sites
// Primitive: Numbers, String, Boolean, Undefined, Symbols, NULL

// String
const student ='Sara';
console.log(student);
console.log(typeof student);

// Numbers
const age = 20;
console.log(age);
console.log(typeof age);

// boolean
const isMarried = true;
console.log(isMarried);
console.log(typeof isMarried);

// NULL
const car = null;
console.log(car);
console.log(typeof car);

// Undefined
let test;
console.log(test);
console.log(typeof test);

//Symbol()
const sym = Symbol();
console.log(sym);
console.log(typeof sym);

// Reference Types
// Objects - created by syntax or pre-written, built-in, pre-defined functions.
// Everything is objects excepts the primitive
// Array
const ids = [1,2,3,4,5,6];
console.log(ids);
console.log(typeof ids);

// Object Literals
const passenger = {
    firstName: 'Sara',
    lastName:'Smith',
    age:32
};
console.log(passenger);
console.log(typeof passenger);

// Built-In Object
const today = new Date();
console.log(today);
console.log(typeof today);

