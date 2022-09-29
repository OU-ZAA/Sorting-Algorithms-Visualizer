const arraySize = 42;
const arrayContainer = document.getElementsByClassName('array-container')[0];
const arrayGenerator = document.getElementById('generate-button');
const sortButton = document.getElementById('sorting-button');
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

sortButton.addEventListener('click', function() 
{   
    selectionSort(arr, arraySize);
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

function selectionSort(array, n) 
{
    let i = 0;
    while(i < n-1)
    {
        let j = locOfSmallest(array, i, n-1);
        swap(array, i, j);
        i++;
    }
}

function swap(array, x, y)
{
    let temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

function locOfSmallest(array, start, end) 
{
    let i = start;
    let j = i;
    while (i <= end)
    {
        if (array[i] < array[j])
        {
            j = i;
        }
        i++;
    }
    return j;
}