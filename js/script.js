// number either decreasing or increasing 
// window.onload = function() {
let number = document.getElementById('number-counter');
// increase element 
let btnIncrement = document.getElementById('btnIncrement');
//reset btn
let btnReset = document.getElementById('btnReset');
// decrease btn
let btnDecrement = document.getElementById('btnDecrement');

// determines whether 
function numColor() {
    let numVal = parseInt(number.innerHTML);
    // if greater than 0 , turn green
    // at 0, turn gray
    // otherwise turn red
    if (numVal > 0) {
        number.style.color = '#72f472';
    } else if (numVal < 0) {
        number.style.color = '#ff2222';
    } else {
        number.style.color = 'gray';
    }
}

//event listener for incrementing the #
btnIncrement.addEventListener('click', () => {
    let numVal = parseInt(number.innerHTML);
    numVal++;
    number.innerHTML = numVal;
    numColor();
});


//event listener for resetting the number back to 0
btnReset.addEventListener('click', () => {
    let numVal = parseInt(number.innerHTML);
    numVal = 0;
    number.innerHTML = numVal;
    numColor()
});


//event listener for decreasing the #
btnDecrement.addEventListener('click', () => {
    let numVal = parseInt(number.innerHTML);
    numVal--;
    number.innerHTML = numVal;
    numColor();
});

