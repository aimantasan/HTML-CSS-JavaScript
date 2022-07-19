let val;

// convert number to string
let a = String(555);
let b = String(4+4);
console.log(a+b);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString
val = (5).toString();
val = (true).toString();

// Convert String to Number
val = Number('5');

// Convert Boolean to Number
val = Number(true);
val = Number(false);

// Null to Number
val = Number(null);

// String
val = Number('Hello');


console.log(val);
console.log(typeof val);
