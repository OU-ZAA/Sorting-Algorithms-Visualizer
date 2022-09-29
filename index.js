const arraySize = 42;
const arrayContainer = document.getElementsByClassName('array-container')[0];
const arrayGenerator = document.getElementById('generate-button');
const selectionSortButton = document.getElementById('selection-sortbtn');
let arr = [];

document.addEventListener('DOMContentLoaded', function() 
{
    generateNewArray(arr); 
    renderArrayElements(arr);
});

arrayGenerator.addEventListener('click', function() 
{
    generateNewArray(arr);
    renderNewArrayElements(arr); 
});

selectionSortButton.addEventListener('click', function() 
{   
    selectionSort(arr);
    renderNewArrayElements(arr);
});


function generateNewArray(array) 
{
    for (let i = 0; i < arraySize; i++) 
    {
        array.splice(i, 1, randonIntFromInterval(5, 500));
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

function renderNewArrayElements(array) 
{
    const elements = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arraySize; i++) 
    {
        elements[i].style.height = `${array[i]}px`;
    }
}

function randonIntFromInterval(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectionSort(array) 
{
    for (let i = 0; i < array.length; i++)
    {
        let min = i;
        for (let j = i + 1; j < array.length; j++)
        {
            if (array[j] < array[min])
            {
                min = j;
            }
        }
        if (i !== min) swap(array, i, min);
    }
    return array;
}

function swap(array, x, y)
{
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}