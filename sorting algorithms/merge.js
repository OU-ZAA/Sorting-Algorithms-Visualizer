const mergeSortButton = document.querySelector('#merge-sortbtn');

mergeSortButton.addEventListener('click', async function() 
{
    const arrElements = document.querySelectorAll('.array-bar');
    const start = 0;
    const end = arrElements.length - 1; 
    disableBtns();
    await mergeSort(arrElements, start, end);
    enableBtns();
});

async function mergeSort(ele, start, end)
{
    if (start >= end) return;

    const middleIndex = start + Math.floor((end - start) / 2);

    await mergeSort(ele, start, middleIndex);
    await mergeSort(ele, middleIndex + 1, end);
    await merge(ele, start, middleIndex, end);
}

async function merge(ele, low, mid, high)
{
    const arrLeftSize = mid - low + 1;
    const arrRightSize = high - mid;
    let left = new Array(arrLeftSize);
    let right = new Array(arrRightSize);

    for (let i = 0; i < arrLeftSize; i++)
    {
        await wait();
        ele[low+i].style.background = '#BC8637';
        left[i] = ele[low+i].style.height;
    }

    for (let i = 0; i < arrRightSize; i++)
    {
        await wait();
        ele[mid+1+i].style.background = '#F9F871';
        right[i] = ele[mid+1+i].style.height;
    }
    await wait();
    let i = 0, j = 0, k = low;
    while (i < arrLeftSize && j < arrRightSize) 
    {
        await wait();
        if (parseInt(left[i]) <= parseInt(right[j]))
        {
            if ((arrLeftSize + arrRightSize) === ele.length)
            {
                ele[k].style.background = '#83EFA1';
            }
            else
            {
                ele[k].style.background = '#BDF685';
            }
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else
        {
            if ((arrLeftSize + arrRightSize) === ele.length)
            {
                ele[k].style.background = '#83EFA1';
            }
            else
            {
                ele[k].style.background = '#BDF685';
            }
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while (i < arrLeftSize)
    {
        if ((arrLeftSize + arrRightSize) === ele.length)
        {
            ele[k].style.background = '#83EFA1';
        }
        else
        {
            ele[k].style.background = '#BDF685';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while (j <arrRightSize)
    {
        if ((arrLeftSize + arrRightSize) === ele.length)
        {
            ele[k].style.background = '#83EFA1';
        }
        else
        {
            ele[k].style.background = '#BDF685';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}
