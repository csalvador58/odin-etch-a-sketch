const sketchPad = document.querySelector("#sketchPad");

let rowCount = 0;
let colCount = 0;
let gridSize = 25; // set default grid size

createNodes(gridSize);
createSquares(gridSize);

document.querySelector("#gridBtn").addEventListener("click", updateSquares);

function createNodes(a) {
    removeSquares();
    for (i = 0; i < a; i++) {
        const nodes = document.createElement("div");
        nodes.classList.add(`c${i}`)
        nodes.textContent = "";
        sketchPad.appendChild(nodes);
    }
}

function createSquares(a) {
    let count = 0;
    for (i = 0; i < a; i++) {
        for (j = 0; j < a; j++) {
            const squares = document.createElement("div");
            squares.classList.add(`r${j}c${i}`);
            squares.textContent = "";
            let = position = document.querySelector(`.c${count}`)
            position.appendChild(squares);
        }
        count++;
    }
}

function removeSquares() {
    const parent = document.querySelector("#sketchPad");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateSquares() {
    userInput = Number(prompt("Enter new grid size (Required range: 4 - 10):"));
    while (userInput == NaN || userInput < 4 || userInput > 100) {
        userInput = Number(prompt("Invalid input, try again (Required range: 4 - 100)."));
    }
    gridSize = userInput;
    createNodes(gridSize);
    createSquares(gridSize);
    return;
}



