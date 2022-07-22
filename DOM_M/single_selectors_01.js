// Select a single element by its ID (document.getElementById('task-title'))
// Only can be used only if the HTML element has the ID
const taskTitle = document.getElementById('task-title');
console.log(taskTitle);

// Get access info about the element
let val = taskTitle.id;

// Change the style of it
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

// Change the text content (3 ways)
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'Current Tasks';
taskTitle.innerHTML = '<span>tasks</span>';

// Using the Query Selector
// ID use #, Class use ., elements just use the tag name

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

// Using query selector for listed elements
// Only for single use
document.querySelector('li').style.color = 'red';

// Using CSS Psudo Selectors
document.querySelector('li:last-child').style.color ='blue';
document.querySelector('li:nth-child(3)').style.color ='pink';
document.querySelector('li:nth-child(4)').textContent ='Hello from DOM';
document.querySelector('li:nth-child(odd)').style.background ='#ccc';
document.querySelector('li:nth-child(even)').style.background ='#f4f4f4';

console.log(val);

