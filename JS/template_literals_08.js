const firstName = 'Sara';
const age = 32;
const job ='Developer';
const city = 'Kuala Lumpur';
let val;

// Without template literals
val = '<ul>'+
'<li>First Name: '+ firstName + '</li>'+
'<li>Age: '+ age + '</li>'+
'<li>Job: '+ job + '</li>'+
'<li>City: '+ city + '</li>'+
'</ul>';

document.body.innerHTML = val;

// With template literals
// Write code in cleaner and easier way
val = `
<ul>
    <li> First Name: ${firstName}</li>
    <li> Age: ${age}</li>
    <li> Job: ${job}</li>
    <li> City: ${city}</li>
</ul>
`
document.body.innerHTML = val;