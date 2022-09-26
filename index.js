const arrayNumber = 42;
const arrayContainer = document.getElementsByClassName('array-container')[0];
const arrayGenerator = document.getElementById('generate-button');
const sortButton = document.getElementById('sorting-button');
let array = [];

document.addEventListener('DOMContentLoaded', function() {

    generateNewArray(array); 
    renderArrayElements(array);

});

arrayGenerator.addEventListener('click', function() {

    generateNewArray(array);
    renderNewArrayElements(array); 

});

sortButton.addEventListener('click', function() {
    
    SortAlgorithm(array);
    renderNewArrayElements(array);
});


function generateNewArray(array) {

    for (let i = 0; i < arrayNumber; i++) {
        array.splice(i, 1, randonIntFromInterval(5, 500));
    }

}

function renderArrayElements(array) {

    array.map(function(value) {
        const element = document.createElement('div');
        element.classList.add('array-bar')
        element.style.height = `${value}px`;
        arrayContainer.appendChild(element);
    });   
    
}

function renderNewArrayElements(array) {

    const elements = document.getElementsByClassName("array-bar");

    for (let i = 0; i < arrayNumber; i++) {
        elements[i].style.height = `${array[i]}px`;
    }
    
}

function randonIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function SortAlgorithm(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                let temp = array[i]; 
                array[i] = array[j]; 
                array[j] = temp;
            }
        }
    }
}