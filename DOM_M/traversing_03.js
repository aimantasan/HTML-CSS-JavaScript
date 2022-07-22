let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

// Get Child Node
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Type of Nodes
// 1 - Elements
// 2 - Attribute
// 3 - textnode
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// How we can get children element node
val = list.children;
val =list.children[0];
val =list.children[0].textContent = 'hello';

// How to get access to children of children
val = list.children[3].children[0];

// How to get Access from the first Child
val = list.firstChild;
val = list.firstElementChild;

// Accessing to Last Child
val = list.lastChild;
val = list.lastElementChild;

// Count the Child Elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get Next Siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get Previous Siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);