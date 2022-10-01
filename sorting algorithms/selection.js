const selectionSortButton = document.querySelector('#selection-sortbtn');

selectionSortButton.addEventListener('click', async function() 
{   
    await selectionSort();
});

async function selectionSort() 
{
    const arrElements = document.querySelectorAll('.array-bar');
    for (let i = 0; i < arrElements.length; i++)
    {
        let min = i;
        arrElements[i].style.background = 'blue';
        for (let j = i + 1; j < arrElements.length; j++)
        {
            console.log('in ith loop');
            arrElements[j].style.background = 'red';
            await wait();
            if (parseInt(arrElements[j].style.height) < parseInt(arrElements[min].style.height))
            {
                if (min !== i)
                {
                    arrElements[min].style.background = 'black';
                }
                min = j;
            }
            else 
            {
                arrElements[j].style.background = 'black';
            }
        }
        await wait();
        swap(arrElements[i], arrElements[min]);
        arrElements[min].style.background = 'black';
        arrElements[i].style.background = 'green';
    }
}

