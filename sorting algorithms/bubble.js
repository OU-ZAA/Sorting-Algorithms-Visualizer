const bubbleSortButton = document.querySelector('#bubble-sortbtn');


bubbleSortButton.addEventListener('click', async function()
{
    await bubbleSort();
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
            arrElements[j].style.background = 'blue';
            arrElements[j+1].style.background = 'blue';
            if (parseInt(arrElements[j].style.height) > parseInt(arrElements[j+1].style.height))
            {
                await wait();
                swap(arrElements[j], arrElements[j+1]);
            }
            arrElements[j].style.background = 'black';
            arrElements[j+1].style.background = 'black';
        }
        arrElements[len-1-i].style.background = 'green';
        i++;
    }
    arrElements[0].style.background = 'green';
}