const sketchPad = document.querySelector("#sketchPad");

let rowCount = 0;
let colCount = 0;
let padSize = 80; // set default grid size
let color = "yellow";

createNodes(padSize);
createSquares(padSize);

document.querySelector("#gridBtn").addEventListener("click", updateSquares);
color = document.querySelector("#redPaint").addEventListener("click", updateColorRed);
color = document.querySelector("#greenPaint").addEventListener("click", updateColorGreen);
color = document.querySelector("#bluePaint").addEventListener("click", updateColorBlue);
color = document.querySelector("#whitePaint").addEventListener("click", updateColorWhite);
color = document.querySelector("#blackPaint").addEventListener("click", updateColorBlack);

updateArray();


// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}



function paintColor(e) {
    e.currentTarget.style.backgroundColor = color;
}

function createNodes(a) {
    removeSquares();
    for (i = 0; i < a; i++) {
        const nodes = document.createElement("div");
        nodes.classList.add(`c${i}`);
        nodes.textContent = "";
        sketchPad.appendChild(nodes);
    }
}

function createSquares(a) {
    let count = 0;
    for (i = 0; i < a; i++) {
        for (j = 0; j < a; j++) {
            const squares = document.createElement("div");
            //squares.classList.add(`r${j}c${i}`);
            squares.setAttribute("id", `r${j}c${i}`);
            squares.setAttribute("class", "divSquare");
            squares.textContent = "";
            let = position = document.querySelector(`.c${count}`)
            position.appendChild(squares);
        }
        count++;
    }
    updateArray()
}

function removeSquares() {
    const parent = document.querySelector("#sketchPad");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateArray() {
    let collection = document.getElementsByClassName("divSquare");

    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener('mouseover', paintColor);
    }
}

function updateColorRed() {
    color = "red";
    console.log(color);
    return color;
}

function updateColorGreen() {
    color = "green";
    console.log(color);
    return color;
}

function updateColorBlue() {
    color = "blue";
    console.log(color);
    return color;
}

function updateColorWhite() {
    color = "white";
    console.log(color);
    return color;
}

function updateColorBlack() {
    color = "black";
    console.log(color);
    return color;
}

function updateSquares() {
    userInput = Number(prompt("Enter new grid size (Required range: 30 - 100):"));
    while (userInput == NaN || userInput < 30 || userInput > 100) {
        userInput = Number(prompt("Invalid input, try again (Required range: 30 - 100)."));
    }
    padSize = userInput;
    createNodes(padSize);
    createSquares(padSize);
}
