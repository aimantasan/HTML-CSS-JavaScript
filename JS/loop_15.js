// when to repeat certain code over and over again until it met certain conditions.
// For Loop
// for (starting point; condition; increment/decrement)
// for(let i = 5; i <= 50; i+= 5){
    
//     if(i === 20) //
//     {
//         console.log(`Your favourite Number: ${i}`);
//         continue; // Exception of the exact value
//     }

//     if(i === 35){
//         console.log('Stop the loop');
//         break; // Stop looping
//     }

//     console.log(`Number: ${i}`);
// }

// While Loop

// let i =0;
// while(i <= 10){
//     console.log('Number ' + i);
//     i++;
// };

// let i =2;
// do{
//     console.log('Number ' + i);
//     i++;
   
// }while (i < 10);

// Finding data array
const colors =['red','yellow','blue','green'];
for(let i = 0; i <colors.length; i++ ){
    console.log(i + colors[i]);
}

// Using For Each
colors.forEach(function(colors){
    console.log(colors);
});