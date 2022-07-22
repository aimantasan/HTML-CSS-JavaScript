// Creating elements from scratch with JS

// Create Elements
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Create the textnode and append as child
li.append(document.createTextNode('Hello from JS'));

// Add ID
li.id = 'new';

// Create a link
const link = document.createElement('a');

// Add Class to Link
link.className = 'delete-item secondary-content';

// Add icon
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
