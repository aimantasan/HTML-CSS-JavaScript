// Getting elements by classname
// const items = document.getElementsByClassName('collection-item');

// HTML collection needs to be converted.
// console.log(items);
// console.log(items[1]);
// items[1].style.color = 'red';

// Getting the elements by tag name
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[1]);
// lis[3].style.color = 'red';

// Converting HTML collection to array
// const lisArr = Array.from(lis);
// let val = lisArr.reverse();
// console.log(val);

// Most powerful selector, could be used as array.
const items = document.querySelectorAll('li.collection-item');
console.log(items);

items.forEach(function(item,index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = '#CCC';
});

for (let i = 0; i <liEven.length; i++){
    li.style.background = '#f4f4f4';
};