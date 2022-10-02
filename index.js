const arrayContainer = document.querySelector('.array-container');
const arrayGenerator = document.querySelector('#generate-array');
const changeArray = document.querySelector('#change-size');
let arraySize = 50;
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

changeArray.addEventListener('change', function() 
{
    console.log('arraysize changed');
    arraySize = 10 + parseInt(changeArray.value);
    unsortedArr = new Array(arraySize);
    generateNewArray(unsortedArr);
    arrayContainer.innerHTML = "";
    renderArrayElements(unsortedArr);
    console.log(arraySize);
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
    const len = array.length;   
    array.map(function(value) 
    {
        const element = document.createElement('div');
        element.classList.add('array-bar')
        element.style.height = `${value}px`;
        arrayContainer.appendChild(element);
        if (len > 50) element.style.width = '6px';
        if (len > 50 && len <= 40) element.style.width = '8px';
        if (len > 20 && len <= 30) element.style.width = '16px';
        if (len > 10 && len <= 20) element.style.width = '20px';
        if (array.length <= 10) element.style.width = '24px';
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