const arrayNumber = 42;
const arrayContainer = document.getElementsByClassName('array-container')[0];
const arrayGenerator = document.getElementById('generate-button');
let array = [];

document.addEventListener('DOMContentLoaded', function() {

    generateNewArray(); 
    renderArrayElements();

});

arrayGenerator.addEventListener('click', function() {

    generateNewArray();
    renderNewArrayElements(); 

});


function generateNewArray() {

    for (let i = 0; i < arrayNumber; i++) {
        array.splice(i, 1, randonIntFromInterval(5, 500));
    }

}

function renderArrayElements() {

    array.map(function(value) {
        const element = document.createElement('div');
        element.classList.add('array-bar')
        element.style.height = `${value}px`;
        arrayContainer.appendChild(element);
    });   
    
}

function renderNewArrayElements() {

    const elements = document.getElementsByClassName("array-bar");

    for (let i = 0; i < arrayNumber; i++) {
        elements[i].style.height = `${array[i]}px`;
    }
    
}

function randonIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}