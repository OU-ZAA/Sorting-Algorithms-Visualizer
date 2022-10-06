
selectionSortButton.addEventListener('click', async function() 
{   
    disableBtns();
    await selectionSort();
    enableBtns()
});

async function selectionSort() 
{
    const arrElements = document.querySelectorAll('.array-bar');
    for (let i = 0; i < arrElements.length; i++)
    {
        let min = i;
        arrElements[i].style.background = '#4D95E1';
        for (let j = i + 1; j < arrElements.length; j++)
        {
            arrElements[j].style.background = '#A92D66';
            await wait();
            if (parseInt(arrElements[j].style.height) < parseInt(arrElements[min].style.height))
            {
                if (min !== i)
                {
                    arrElements[min].style.background = '#00D7D4';
                }
                min = j;
            }
            else 
            {
                arrElements[j].style.background = '#00D7D4';
            }
        }
        await wait();
        swap(arrElements[i], arrElements[min]);
        arrElements[min].style.background = '#00D7D4';
        arrElements[i].style.background = '#83EFA1';
    }
}

