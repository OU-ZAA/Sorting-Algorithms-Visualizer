const arrayContainer = document.querySelector(".array-container");
const arrayGenerator = document.querySelector("#generate-array");
const changeArray = document.querySelector("#change-size");
const mergeSortButton = document.querySelector("#merge-sort");
const selectionSortButton = document.querySelector("#selection-sort");
const bubbleSortButton = document.querySelector("#bubble-sort");
const toolBar = document.querySelector("#toolbar");
const sortBtn = document.querySelector("#sort");
let arraySize = 87;
let delay = 80;
let unsortedArr = new Array(arraySize);

document.addEventListener("DOMContentLoaded", function () {
  generateNewArray(unsortedArr);
  renderArrayElements(unsortedArr);
});

arrayGenerator.addEventListener("click", generateAndRenderArray);

changeArray.addEventListener("change", function () {
  const value = parseInt(changeArray.value);
  arraySize = Math.floor((value + 3) * 1.65);
  unsortedArr = new Array(arraySize);
  generateNewArray(unsortedArr);
  arrayContainer.innerHTML = "";
  renderArrayElements(unsortedArr);
  if (value < 50) delay = value + 400;
  if (value > 50) delay = value;
});

bubbleSortButton.addEventListener("click", () => {
  if (sortBtn.style.display === "") {
    sortBtn.style.display = "block";
  }
  sortBtn.setAttribute("data-algo", "bubble-sort");
  mergeSortButton.style.color = "white";
  selectionSortButton.style.color = "white";
  bubbleSortButton.style.color = "rgb(241, 94, 255)";
});

selectionSortButton.addEventListener("click", () => {
  if (sortBtn.style.display === "") {
    sortBtn.style.display = "block";
  }
  sortBtn.setAttribute("data-algo", "selection-sort");
  mergeSortButton.style.color = "white";
  bubbleSortButton.style.color = "white";
  selectionSortButton.style.color = "rgb(241, 94, 255)";
});

mergeSortButton.addEventListener("click", () => {
  if (sortBtn.style.display === "") {
    sortBtn.style.display = "block";
  }
  sortBtn.setAttribute("data-algo", "merge-sort");
  bubbleSortButton.style.color = "white";
  selectionSortButton.style.color = "white";
  mergeSortButton.style.color = "rgb(241, 94, 255)";
});

sortBtn.addEventListener("click", async () => {
  const chosenAlgo = sortBtn.dataset.algo;
  if (chosenAlgo === "merge-sort") {
    const ele = document.querySelectorAll(".array-bar");
    disableBtns();
    await mergeSort(ele, 0, ele.length - 1);
    enableBtns();
  }
});

function generateNewArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = randonIntFromInterval(50, 600);
  }
}
function generateAndRenderArray() {
  generateNewArray(unsortedArr);
  arrayContainer.innerHTML = "";
  renderArrayElements(unsortedArr);
}

function renderArrayElements(array) {
  const len = array.length;
  array.map(function (value) {
    const element = document.createElement("div");
    element.classList.add("array-bar");
    element.style.height = `${value}px`;
    const width = Math.floor(window.innerWidth / (len * 3));
    element.style.width = `${width}px`;
    if (len < 170) element.style.marginLeft = "2px";
    if (len < 100) element.style.marginLeft = "3px";
    if (len < 50) element.style.marginLeft = "3.5px";
    if (len < 20) element.style.marginLeft = "4px";
    if (len < 11) element.style.marginLeft = "6px";
    if (len < 8) element.style.marginLeft = "8px";
    if (len < 5) element.style.marginLeft = "10px";
    element.textContent = value;
    element.style.color = len < 25 ? "white" : "transparent";
    if (width > 20) element.style.fontSize = "10px";
    if (width > 30) element.style.fontSize = "12px";
    if (width > 40) element.style.fontSize = "14px";
    if (width > 50) element.style.fontSize = "16px";
    if (width > 60) element.style.fontSize = "18px";
    if (width > 70) element.style.fontSize = "20px";
    arrayContainer.appendChild(element);
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
  arrayGenerator.setAttribute("class", "disabled");
  sortBtn.setAttribute("class", "disabled");
  document.querySelector("#array-size").setAttribute("class", "disabled");
}

function enableBtns() {
  arrayGenerator.removeAttribute("class", "disabled");
  sortBtn.removeAttribute("class", "disabled");
  document.querySelector("#array-size").removeAttribute("class", "disabled");
}

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
      await wait();
      arrElements[j].style.background = "#00D7D4";
      arrElements[j + 1].style.background = "#00D7D4";
    }
    arrElements[len - 1 - i].style.background = "#83EFA1";
    i++;
  }
  arrElements[0].style.background = "#83EFA1";
}

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
    const softOrange = "#f1993e";
    ele[low + i].style.background = softOrange;
    left[i] = parseInt(ele[low + i].style.height.replace("px", ""));
  }

  for (let i = 0; i < arrRightSize; i++) {
    await wait();
    const brightYellow = "#f0f13e";
    ele[mid + 1 + i].style.background = brightYellow;
    right[i] = parseInt(ele[mid + 1 + i].style.height.replace("px", ""));
  }

  await wait();
  const limeGreen = "#83EFA1";
  const brightGreen = "#70d30f";
  let i = 0,
    j = 0,
    k = low;
  while (i < arrLeftSize && j < arrRightSize) {
    await wait();
    if (left[i] <= right[j]) {
      if (arrLeftSize + arrRightSize === ele.length) {
        ele[k].style.background = limeGreen;
      } else {
        ele[k].style.background = brightGreen;
      }
      ele[k].style.height = `${left[i]}px`;
      ele[k].textContent = left[i];
      i++;
      k++;
    } else {
      if (arrLeftSize + arrRightSize === ele.length) {
        ele[k].style.background = limeGreen;
      } else {
        ele[k].style.background = brightGreen;
      }
      ele[k].style.height = `${right[j]}px`;
      ele[k].textContent = right[j];
      j++;
      k++;
    }
  }

  while (i < arrLeftSize) {
    await wait();
    if (arrLeftSize + arrRightSize === ele.length) {
      ele[k].style.background = limeGreen;
    } else {
      ele[k].style.background = brightGreen;
    }
    ele[k].style.height = `${left[i]}px`;
    ele[k].textContent = left[i];
    i++;
    k++;
  }

  while (j < arrRightSize) {
    await wait();
    if (arrLeftSize + arrRightSize === ele.length) {
      ele[k].style.background = limeGreen;
    } else {
      ele[k].style.background = brightGreen;
    }
    ele[k].style.height = `${right[j]}px`;
    ele[k].textContent = right[j];
    j++;
    k++;
  }
}

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
