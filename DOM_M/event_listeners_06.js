//  Select an element and add event listeners
// 
document.querySelector('.clear-tasks').addEventListener('click', runEvent);

// e is the event
function runEvent(e){
    // console.log('Click');

    let val;
    val = e;

    val = e.target;
    val = e.target.id;
    val = e.target.className;

    // Give DOM Token List
    val = e.target.classList;

    // Event Type
    val = e.type;

    // Event Timestamp
    val = e.timestamp;

    // Coord events related to the window
    val =e.clientY;
    val =e.clientX;

    // Coord events related to the elements
    val = e.offsetY;
    val = e.offsetX;

    console.log (val);
}