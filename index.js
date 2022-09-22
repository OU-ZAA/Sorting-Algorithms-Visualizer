const arrayNumber = 42;
const arrayContainer = document.getElementsByClassName('array-container')[0];

document.addEventListener("DOMContentLoaded", function() {
    // if (array.length === arrayNumber) return;
    resetArray(); 
});

function resetArray() {
    const array = [];
    for (let i = 0; i < arrayNumber; i++) {
        array.push(randonIntFromInterval(5, 500));
    }
    array.map(function(value) {
        const element = document.createElement('div');
        element.classList.add('array-bar')
        element.style.height = `${value}px`;
        arrayContainer.appendChild(element);
    });
}

function randonIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}