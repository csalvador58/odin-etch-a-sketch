const sketchPad = document.querySelector("#sketchPad");

let rowCount = 0;
let colCount = 0;
let padSize = 80; // set default grid size
const painter = {
    color: "yellow",
    multiColor: false,
    counter: 0,
};
const colorOptions = ["red", "green", "blue", "white", "black"];

createNodes(padSize);
createSquares(padSize);

document.querySelector("#gridBtn").addEventListener("click", updateSquares);
document.querySelector("#redPaint").addEventListener("click", () => { updateColor(0); });
document.querySelector("#greenPaint").addEventListener("click", () => { updateColor(1); });
document.querySelector("#bluePaint").addEventListener("click", () => { updateColor(2); });
document.querySelector("#whitePaint").addEventListener("click", () => { updateColor(3); });
document.querySelector("#blackPaint").addEventListener("click", () => { updateColor(4); });
document.querySelector("#multiPaint").addEventListener("click", () => { updateColor("true"); });
document.querySelector("#clearPaint").addEventListener("click", () => { 
    createNodes(padSize);
    createSquares(padSize);
 });

updateArray();

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

function paintColor(e) {
    if (painter.multiColor == "true") {
        painter.counter++;
        console.log(painter.counter);
        if (painter.counter % 10 == 0) {
            painter.color = colorOptions[Math.floor(Math.random() * 5)];
            e.currentTarget.style.backgroundColor = painter.color;
            console.log(painter.color);
        } else {
            e.currentTarget.style.backgroundColor = painter.color;
        }
    } else {
        e.currentTarget.style.backgroundColor = painter.color;
    }
}

function removeSquares() {
    const parent = document.querySelector("#sketchPad");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateArray() {
    const collection = document.getElementsByClassName("divSquare");

    //collection.forEach(collection => collection.addEventListener('mouseover', paintColor));

    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener('mouseover', paintColor);
    }
}

function updateColor(a) {
    if (a == "true") {
        painter.multiColor = "true";
        console.log(painter.color);
        return;
    } else {
        painter.multiColor = "false";
        painter.counter = 0;
        painter.color = colorOptions[a];
        console.log(painter.color);
        return;
    }
}

function updateSquares() {
    userInput = prompt("Enter new grid size (Required range: 30 - 100):");
    while (isNaN(userInput) || userInput < 30 || userInput > 100) {
        console.log(userInput);
        if (userInput === null) {
            return;
        } else {
            userInput = prompt("Invalid input, try again (Required range: 30 - 100).");           
        }
    }
        padSize = userInput;
        createNodes(padSize);
        createSquares(padSize);
}

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}