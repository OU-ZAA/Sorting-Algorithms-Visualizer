const arrayContainer = document.querySelector(".array-container");
const arrayGenerator = document.querySelector("#generate-array");
const changeArray = document.querySelector("#change-size");
const mergeSortButton = document.querySelector("#merge-sort");
const quickSortButton = document.querySelector("#quick-sort");
const heapSortButton = document.querySelector("#heap-sort");
const bubbleSortButton = document.querySelector("#bubble-sort");
const toolBar = document.querySelector("#toolbar");
const sortBtn = document.querySelector("#sort");
let arraySize = 87;
let unsortedArr = new Array(arraySize);
let delay = (1 / arraySize) * 1000;

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
  delay = (1 / arraySize) * 1000;
});

bubbleSortButton.addEventListener("click", () => {
  if (sortBtn.style.display === "") {
    sortBtn.style.display = "block";
  }
  sortBtn.setAttribute("data-algo", "bubble-sort");
  mergeSortButton.style.color = "white";
  quickSortButton.style.color = "white";
  heapSortButton.style.color = "white";
  bubbleSortButton.style.color = "rgb(241, 94, 255)";
});

quickSortButton.addEventListener("click", () => {
  if (sortBtn.style.display === "") {
    sortBtn.style.display = "block";
  }
  sortBtn.setAttribute("data-algo", "quick-sort");
  mergeSortButton.style.color = "white";
  bubbleSortButton.style.color = "white";
  heapSortButton.style.color = "white";
  quickSortButton.style.color = "rgb(241, 94, 255)";
});

heapSortButton.addEventListener("click", () => {
  if (sortBtn.style.display === "") {
    sortBtn.style.display = "block";
  }
  sortBtn.setAttribute("data-algo", "heap-sort");
  bubbleSortButton.style.color = "white";
  quickSortButton.style.color = "white";
  mergeSortButton.style.color = "white";
  heapSortButton.style.color = "rgb(241, 94, 255)";
});

mergeSortButton.addEventListener("click", () => {
  if (sortBtn.style.display === "") {
    sortBtn.style.display = "block";
  }
  sortBtn.setAttribute("data-algo", "merge-sort");
  bubbleSortButton.style.color = "white";
  quickSortButton.style.color = "white";
  heapSortButton.style.color = "white";
  mergeSortButton.style.color = "rgb(241, 94, 255)";
});

sortBtn.addEventListener("click", async () => {
  const chosenAlgo = sortBtn.dataset.algo;
  const ele = document.querySelectorAll(".array-bar");
  if (chosenAlgo === "merge-sort") {
    disableBtns();
    await mergeSort(ele, 0, ele.length - 1);
    enableBtns();
  } else if (chosenAlgo === "bubble-sort") {
    disableBtns(ele);
    await bubbleSort();
    enableBtns();
  } else if (chosenAlgo === "quick-sort") {
    disableBtns();
    await quickSort(ele, 0, ele.length - 1);
    enableBtns();
  } else if (chosenAlgo === "heap-sort") {
    heapSort(ele);
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
  let i = 0;
  const len = arrElements.length;
  const limeGreen = "#83EFA1";
  while (i < len) {
    await wait();
    for (let j = 0; j < len - 1 - i; j++) {
      const softRed = "#e14f4d";
      arrElements[j].style.background = softRed;
      arrElements[j + 1].style.background = softRed;
      if (
        parseInt(arrElements[j].style.height) >
        parseInt(arrElements[j + 1].style.height)
      ) {
        await wait();
        swap(arrElements[j], arrElements[j + 1]);
      }
      await wait();
      const brightBlue = "rgba(66, 134, 244, 0.8)";
      arrElements[j].style.background = brightBlue;
      arrElements[j + 1].style.background = brightBlue;
    }
    arrElements[len - 1 - i].style.background = limeGreen;
    i++;
  }
  arrElements[0].style.background = limeGreen;
}

function swap(el1, el2) {
  const temp = el1.style.height;
  el1.style.height = el2.style.height;
  el1.textContent = el2.style.height.replace("px", "");
  el2.style.height = temp;
  el2.textContent = temp.replace("px", "");
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

async function quickSort(ele, lo, hi) {
  if (lo >= hi) {
    await wait();
    ele[lo].style.background = "#83EFA1";
    return;
  }

  const pivotIdx = await partition(ele, lo, hi);
  ele[pivotIdx].style.background = "#83EFA1";

  await quickSort(ele, lo, pivotIdx - 1);
  await quickSort(ele, pivotIdx + 1, hi);
}

async function partition(ele, lo, hi) {
  const pivot = ele[hi];
  await wait();
  pivot.style.background = "#f0f13e";

  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (
      parseInt(ele[i].style.height) <=
      parseInt(pivot.style.height.replace("px", ""))
    ) {
      idx++;
      await wait();
      ele[i].style.background = "red";
      ele[idx].style.background = "red";
      swap(ele[idx], ele[i]);
      await wait();
      ele[i].style.background = "rgba(66, 134, 244, 0.8)";
      ele[idx].style.background = "rgba(66, 134, 244, 0.8)";
    }
  }

  idx++;
  swap(ele[idx], pivot);
  await wait();
  pivot.style.background = "rgba(66, 134, 244, 0.8)";

  return idx;
}

async function heapSort(ele) {
  const n = ele.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(ele, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    await wait();
    ele[i].style.background = "red";
    ele[0].style.background = "red";
    swap(ele[i], ele[0]);
    await wait();
    ele[0].style.background = "rgba(66, 134, 244, 0.8)";
    ele[i].style.background = "#83EFA1";

    await heapify(ele, i, 0);
  }
}

async function heapify(ele, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (
    left < n &&
    parseInt(ele[left].style.height.replace("px", "")) >
      parseInt(ele[largest].style.height.replace("px", ""))
  ) {
    largest = left;
  }

  if (
    right < n &&
    parseInt(ele[right].style.height.replace("px", "")) >
      parseInt(ele[largest].style.height.replace("px", ""))
  ) {
    largest = right;
  }

  if (largest !== i) {
    await wait();
    ele[largest].style.background = "#70d30f";
    ele[i].style.background = "#70d30f";
    swap(ele[largest], ele[i]);
    await wait();
    ele[largest].style.background = "rgba(66, 134, 244, 0.8)";
    ele[i].style.background = "rgba(66, 134, 244, 0.8)";
    await heapify(ele, n, largest);
  }
}
