
bubbleSortButton.addEventListener('click', async function()
{
    disableBtns();
    await bubbleSort();
    enableBtns();
});

async function bubbleSort()
{
    const arrElements = document.querySelectorAll('.array-bar');
    let i = 0;
    const len = arrElements.length;
    while (i < len)
    {
        await wait();
        for (let j = 0; j < len - 1 - i; j++)
        {
            arrElements[j].style.background = '#4D95E1';
            arrElements[j+1].style.background = '#4D95E1';
            if (parseInt(arrElements[j].style.height) > parseInt(arrElements[j+1].style.height))
            {
                await wait();
                swap(arrElements[j], arrElements[j+1]);
            }
            arrElements[j].style.background = '#00D7D4';
            arrElements[j+1].style.background = '#00D7D4';
        }
        arrElements[len-1-i].style.background = '#83EFA1';
        i++;
    }
    arrElements[0].style.background = '#83EFA1';
}