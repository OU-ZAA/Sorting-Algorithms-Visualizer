const arrayContainer = document.querySelector(".array-container");
const arrayGenerator = document.querySelector("#generate-array");
const changeArray = document.querySelector("#change-size");
const mergeSortButton = document.querySelector("#merge-sort");
const selectionSortButton = document.querySelector("#selection-sort");
const bubbleSortButton = document.querySelector("#bubble-sort");
let arraySize = 50;
let delay = 80;
let unsortedArr = new Array(arraySize);

document.addEventListener("DOMContentLoaded", function () {
  generateNewArray(unsortedArr);
  renderArrayElements(unsortedArr);
});

arrayGenerator.addEventListener("click", function () {
  generateNewArray(unsortedArr);
  arrayContainer.innerHTML = "";
  renderArrayElements(unsortedArr);
});

changeArray.addEventListener("change", function () {
  const value = parseInt(changeArray.value);
  arraySize = 10 + value;
  unsortedArr = new Array(arraySize);
  generateNewArray(unsortedArr);
  arrayContainer.innerHTML = "";
  renderArrayElements(unsortedArr);
  if (value < 50) delay = value + 400;
  if (value > 50) delay = value;
});

function generateNewArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = randonIntFromInterval(5, 500);
  }
}

function renderArrayElements(array) {
  const len = array.length;
  array.map(function (value) {
    const element = document.createElement("div");
    element.classList.add("array-bar");
    element.style.height = `${value}px`;
    arrayContainer.appendChild(element);
    if (len > 50) element.style.width = "6px";
    if (len > 50 && len <= 40) element.style.width = "8px";
    if (len > 20 && len <= 30) element.style.width = "16px";
    if (len > 10 && len <= 20) element.style.width = "20px";
    if (len <= 10) element.style.width = "24px";
  });
}

function randonIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function wait() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), delay);
  });
}

function swap(el1, el2) {
  const temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

function disableBtns() {
  arrayGenerator.disabled = true;
  selectionSortButton.disabled = true;
  bubbleSortButton.disabled = true;
  mergeSortButton.disabled = true;
  changeArray.disabled = true;
}

function enableBtns() {
  arrayGenerator.disabled = false;
  selectionSortButton.disabled = false;
  bubbleSortButton.disabled = false;
  mergeSortButton.disabled = false;
  changeArray.disabled = false;
}

bubbleSortButton.addEventListener("click", async function () {
  disableBtns();
  await bubbleSort();
  enableBtns();
});

async function bubbleSort() {
  const arrElements = document.querySelectorAll(".array-bar");
  let i = 0;
  const len = arrElements.length;
  while (i < len) {
    await wait();
    for (let j = 0; j < len - 1 - i; j++) {
      arrElements[j].style.background = "#4D95E1";
      arrElements[j + 1].style.background = "#4D95E1";
      if (
        parseInt(arrElements[j].style.height) >
        parseInt(arrElements[j + 1].style.height)
      ) {
        await wait();
        swap(arrElements[j], arrElements[j + 1]);
      }
      arrElements[j].style.background = "#00D7D4";
      arrElements[j + 1].style.background = "#00D7D4";
    }
    arrElements[len - 1 - i].style.background = "#83EFA1";
    i++;
  }
  arrElements[0].style.background = "#83EFA1";
}

mergeSortButton.addEventListener("click", async function () {
  const arrElements = document.querySelectorAll(".array-bar");
  const start = 0;
  const end = arrElements.length - 1;
  disableBtns();
  await mergeSort(arrElements, start, end);
  enableBtns();
});

async function mergeSort(ele, start, end) {
  if (start >= end) return;

  const middleIndex = start + Math.floor((end - start) / 2);

  await mergeSort(ele, start, middleIndex);
  await mergeSort(ele, middleIndex + 1, end);
  await merge(ele, start, middleIndex, end);
}

async function merge(ele, low, mid, high) {
  const arrLeftSize = mid - low + 1;
  const arrRightSize = high - mid;
  let left = new Array(arrLeftSize);
  let right = new Array(arrRightSize);

  for (let i = 0; i < arrLeftSize; i++) {
    await wait();
    ele[low + i].style.background = "#BC8637";
    left[i] = ele[low + i].style.height;
  }

  for (let i = 0; i < arrRightSize; i++) {
    await wait();
    ele[mid + 1 + i].style.background = "#F9F871";
    right[i] = ele[mid + 1 + i].style.height;
  }
  await wait();
  let i = 0,
    j = 0,
    k = low;
  while (i < arrLeftSize && j < arrRightSize) {
    await wait();
    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (arrLeftSize + arrRightSize === ele.length) {
        ele[k].style.background = "#83EFA1";
      } else {
        ele[k].style.background = "#BDF685";
      }
      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      if (arrLeftSize + arrRightSize === ele.length) {
        ele[k].style.background = "#83EFA1";
      } else {
        ele[k].style.background = "#BDF685";
      }
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < arrLeftSize) {
    if (arrLeftSize + arrRightSize === ele.length) {
      ele[k].style.background = "#83EFA1";
    } else {
      ele[k].style.background = "#BDF685";
    }
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < arrRightSize) {
    if (arrLeftSize + arrRightSize === ele.length) {
      ele[k].style.background = "#83EFA1";
    } else {
      ele[k].style.background = "#BDF685";
    }
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

selectionSortButton.addEventListener("click", async function () {
  disableBtns();
  await selectionSort();
  enableBtns();
});

async function selectionSort() {
  const arrElements = document.querySelectorAll(".array-bar");
  for (let i = 0; i < arrElements.length; i++) {
    let min = i;
    arrElements[i].style.background = "#4D95E1";
    for (let j = i + 1; j < arrElements.length; j++) {
      arrElements[j].style.background = "#A92D66";
      await wait();
      if (
        parseInt(arrElements[j].style.height) <
        parseInt(arrElements[min].style.height)
      ) {
        if (min !== i) {
          arrElements[min].style.background = "#00D7D4";
        }
        min = j;
      } else {
        arrElements[j].style.background = "#00D7D4";
      }
    }
    await wait();
    swap(arrElements[i], arrElements[min]);
    arrElements[min].style.background = "#00D7D4";
    arrElements[i].style.background = "#83EFA1";
  }
}
