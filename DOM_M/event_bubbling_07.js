// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('Card Title Clicked');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('Card Content Clicked');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('Card Clicked');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('Col Clicked');
// });

// document.querySelector('.row').addEventListener('click', function(){
//     console.log('Row Clicked');
// });

// document.querySelector('.container').addEventListener('click', function(){
//     console.log('Container Clicked');
// });

// Event Delegation
const delItem = document.querySelector('.delete-item');
document.body.addEventListener('click',deleteItem);

function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
}
