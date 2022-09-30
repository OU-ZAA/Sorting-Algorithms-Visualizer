const arraySize = 42;
const arrayContainer = document.getElementsByClassName('array-container')[0];
const arrayGenerator = document.getElementById('generate-button');
const selectionSortButton = document.getElementById('selection-sortbtn');
const mergeSortButton = document.querySelector('#merge-sortbtn');
const bubbleSortButton = document.querySelector('#bubble-sortbtn');
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
    renderNewArrayElements(selectionSort(arr));
});

mergeSortButton.addEventListener('click', function() 
{
    renderNewArrayElements(mergeSort(arr));
});

bubbleSortButton.addEventListener('click', function()
{
    renderNewArrayElements(bubbleSort(arr));
})

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

function mergeSort(array)
{
    const len = array.length;

    if (len == 1) return array;

    const middleIndex = Math.ceil(len / 2);

    let leftList = array.slice(0, middleIndex);
    let rightList = array.slice(middleIndex, len);

    leftList = mergeSort(leftList);
    rightList = mergeSort(rightList);

    return merge(leftList, rightList);
}

function merge(leftList, rightList)
{
    const sorted = [];

    while (leftList.length > 0 && rightList.length > 0)
    {
        const leftItem = leftList[0];
        const rightItem = rightList[0];
        if (leftItem < rightItem)
        {
            sorted.push(leftItem);
            leftList.shift(leftItem);
        }
        else
        {
            sorted.push(rightItem);
            rightList.shift(rightItem);
        }
    }

    while (leftList.length !== 0)
    {
        sorted.push(leftList[0]);
        leftList.shift(leftList[0]);
    }

    while (rightList.length !== 0)
    {
        sorted.push(rightList[0]);
        rightList.shift(rightList[0]);
    }

    return sorted;
}

function bubbleSort(array)
{
    let i = 0;
    const len = array.length;
    while (i < len)
    {
        for (let j = 0; j < len - 1; j++)
        {
            if (array[j] > array[j+1])
            {
                swap(array, j, j+1);
            }
        }
        i++;
    }
    return array;
}

function swap(array, x, y)
{
    const temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}