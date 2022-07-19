// Array use square brackets []
// Object use curly brackets {}
const person = {
    // Key paired values
    firstName: 'Sara',
    lastName: 'Smith',
    age: 30,
    email: 'Sara@gmail.com',
    address: {
        city: 'Kuala Lumpur',
        country: 'Malaysia'
    },
    course: ['cloud','software']
};
// console.log(person);


let val;
// Get Specific Value

val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;

val = person['firstName'];

// Find value for object in object
val = person.address.city;
val = person.address.country;


// Find data in array 
val = person.course;
val = person.course[0]; // index


// Store 3 person in variable

const people = [
    {name: 'sara', age: 30},
    {name: 'John', age: 45},
    {name: 'Kim', age: 36}
];
console.log(people);

val = people[0].name;
console.log(val);
