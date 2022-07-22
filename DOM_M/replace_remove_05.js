// Replace

// Creating Elements
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// Add text node
newHeading.appendChild(document.createTextNode('Task list'));

// Select the Old Heading
const oldHeading = document.getElementById('task-title');

// Parent Element
const cardAction = document.querySelector('.card-action');

// Replace Method
cardAction.replaceChild(newHeading,oldHeading);


// Removing Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove the list item
lis[0].remove();

// Remove child element
list.removeChild(lis[2]);