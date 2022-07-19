// Create Arrays
const numbers = [34,85,99,77,12,3,90,-100];
const colors = ['pink', 'green', 'blue', 'silver'];

const numbers2 = new Array(22,33,44,55);

const mixed = [22,'Hello', null, undefined,true,[1,2,3],{a:1,b:2},Date];

// let val;

// console.log(numbers);
// console.log(colors);
// console.log(numbers2);
// console.log(mixed);

// // Get array length
// val = numbers.length;

// // Check if isArray
// val = Array.isArray(numbers2);

// // Get single value
// val = numbers[3];
// val = numbers[6];
// console.log(val);

// // Insert value to an Array
// numbers[2] = 250;
// console.log(numbers);

// // Find the index number
// val = numbers.indexOf(90);
// console.log(val);

// // manipulate arrays
// // Add value to end of an array
// numbers.push(500);

// // Add value at the beginning of the array
// numbers.unshift(300);

// // Remove value to end of an array
// numbers.pop();

// // Add value at the beginning of the array
// numbers.shift(300);

// // Splice
// numbers.splice(1,4);

// // Reverse
// numbers2.reverse();

// // concat array
// val =numbers2.concat(colors);

// console.log(numbers);
// console.log(numbers2);


// Sort an Array
val = numbers.sort();

// Compare function
// Ascending Order
val = numbers.sort(function(a,b){
    return a-b;
});
// Decending Order
val = numbers.sort(function(a,b){
    return b-a;
});

// Find
function over90(num){
    return num > 90
}

val = numbers.find(over90);


console.log(val);