const arraySize = 42;
const arrayContainer = document.querySelector('.array-container');
const arrayGenerator = document.querySelector('#generate-button');
let unsortedArr = new Array(arraySize);

document.addEventListener('DOMContentLoaded', function() 
{
    generateNewArray(unsortedArr); 
    renderArrayElements(unsortedArr);
});

arrayGenerator.addEventListener('click', function() 
{
    generateNewArray(unsortedArr);
    arrayContainer.innerHTML = "";
    renderArrayElements(unsortedArr); 
});

function generateNewArray(array) 
{
    for (let i = 0; i < array.length; i++) 
    {
        array[i] = randonIntFromInterval(5, 500);
    }
}

function renderArrayElements(array) 
{
    array.map(function(value) 
    {
        const element = document.createElement('div');
        element.classList.add('array-bar')
        element.style.height = `${value}px`;
        arrayContainer.appendChild(element);
    });    
}

function randonIntFromInterval(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function wait()
{
    return new Promise(resolve => {
        setTimeout(() => resolve(''), 100)
    });
}

function swap(el1, el2)
{
    const temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function disableBtns()
{
    document.querySelector('#generate-button').disabled = true;
    document.querySelector('#selection-sortbtn').disabled = true;
    document.querySelector('#bubble-sortbtn').disabled = true;
    document.querySelector('#merge-sortbtn').disabled = true;
}

function enableBtns()
{
    document.querySelector('#generate-button').disabled = false;
    document.querySelector('#selection-sortbtn').disabled = false;
    document.querySelector('#bubble-sortbtn').disabled = false;
    document.querySelector('#merge-sortbtn').disabled = false;
}