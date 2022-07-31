const sketchPad = document.querySelector("#sketchPad");
//const div = document.createElement("div");

const gridSize = 25;

let rowCount = 0;
let colCount = 0;

createNodes(gridSize);
createSquares(gridSize);

function createNodes(a) {
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



