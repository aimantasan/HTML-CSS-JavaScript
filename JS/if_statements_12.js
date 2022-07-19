/* if (condition){
    do something
} else{
    do something else
} */

// const id = 100;
let id;

// Equal to 
if(id == 100){
    console.log('Correct ID');
}else{
    console.log('ID Rejected');
}

console.log (typeof id);


// // Not Equal
// if(id != 100){
//     console.log('Not Equal to 100');
// }else{
//     console.log('Equal to 100');
// }

// Equal value and Type
if(id === 100){
    console.log('same value & type');
} else{
    console.log('value and type are not matching');
}

// Not Equal value and Type
if(id === 100){
    console.log('value and type are not matching ');
} else{
    console.log('same value & type');
}

id;
// Check for undefined

if(id !== undefined){
    console.log(`the id is ${id}`)
}else{
    console.log('No ID');
}

if(id === undefined){
    console.log('No ID')
}else{
    console.log(`The idis ${id}`);
}

// Greater Than or Less Than
id = 101;

if(id >= 100){
    console.log('Correct');
} else{
    console.log('Incorrect');
}

// If, Else, Else If Statement
const color = 'red';

if(color === 'red'){
    console.log('red color');
}else if(color === 'yellow'){
    console.log('yellow color');
}else{
    console.log ('try again');
}


// Logical Operators
const nationality = 'Malaysian';
const age = '18';
const name = 'Maru'

// Using && AND Operands -> All conditions mut be true.
if(nationality ==='Malaysian' && age >= 18){
    console.log('You are registered');
}else{
    console.log('You are not eligible');
}

//  Using || OR Operands -> Either one conditions could be true
if(age < 18 || age > 60){
    console.log('You are not eligible');
}else{
    console.log(`${name}, you are eligible!`);
}

// Ternary Operators
console.log((id === 100 ? 'Correct' : 'Not Correct'));
