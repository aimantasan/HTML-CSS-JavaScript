// Function Declaration

// Inside Bracket -> Suppose to receive the data
function greeting(firstName,lastName){
    if(typeof firstName === 'undefined'){firstName = 'KIM'};
    if(typeof lastName === 'undefined'){lastName = 'Doe'};
    return 'Hello '+ firstName + ' '+lastName;
}

console.log(greeting('Sara', 'Smith'));
console.log(greeting());

function greeting2(firstName ='John',lastName = 'Doe'){
    return 'Hello '+ firstName + ' '+lastName;
}

console.log(greeting2());

function welcome(){
    console.log('Welcome to AirAsia Academy');
}
welcome();

// Function Expressions - Storing functions in a variable.
const sqr = function(x = 5){
    return x*x
};
console.log(sqr(3));

const sqr1 = function(x = 3){
    console.log(x*x);
};
sqr1();

// IIFEs (Immediately Invokeable function expression)
// Syntax are bit different from other functions.
(function(){
    console.log('Hello from IIFEs');
})();

// Calling variables from IIFEs
(function(userName = 'John'){// Default value if undefined
    console.log('Welcome ' + userName)
})('Kim');

// Function as property method
const todo ={
    add: function(){
        console.log('Add Todo');
    },
    edit: function(){
        console.log('Edit Todo');
    }
}

todo.delete = function(){
    console.log('Delete Todo');
}

todo.add();
todo.edit();
todo.delete();

console.log(todo);