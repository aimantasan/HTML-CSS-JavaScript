const firstName = 'Sara';
const lastName = 'Smith';
const age = 30;
const text = 'welcome to css';
const topics = 'web design, digital marketing, cyber security'

// Concat
val = firstName+' '+lastName;
val = firstName.concat(' ' + lastName);

// Appending adding additional studd and not overwrite it
val = 'Nagmeh ';
val += 'Mohammadi';

val = 'Hello my name is '+ firstName +' and my last name is '+lastName;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// Change Case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// indexOf
val= firstName.indexOf('a');
val= firstName.lastIndexOf('a');

// Character At
val = firstName.charAt(2);

// Get Last Character
val = firstName.charAt(firstName.length-1);

// Replace
val = text.replace('css','javascript');

// Slice
val = firstName.slice(1,2);
val = firstName.slice(-3);

// Split
val = topics.split(',');

// Includes
val = text.includes('welcome'); // This one is case sensitive
console.log(val);