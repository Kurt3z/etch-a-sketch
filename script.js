const SKETCH_AREA_WIDTH = 680;
const sketchArea = document.querySelector('.grid');
const rowSizeSelection = document.querySelector('#row-size');
const displayRowSizeSelection = document.querySelectorAll('.selected');
const toolInUse = document.querySelector('#tool');

// Buttons
const createAreaBtn = document.querySelector('#create');
const clearAreaBtn = document.querySelector('#clear');
const pencilBtn = document.querySelector('#pencil');
const rainbowBtn = document.querySelector('#rainbow');
const darkerBtn = document.querySelector('#darker');
console.log(darkerBtn);
const eraserBtn = document.querySelector('#eraser');
let squaresList;

rowSizeSelection.value = 16;
let rowSize = 16; // Default value if user does not input a size

rowSizeSelection.addEventListener('input', function (e) {
    rowSize = e.target.value;

    displayRowSizeSelection.forEach(selection => {
        selection.textContent = e.target.value;
    });
});

createAreaBtn.addEventListener('click', function () {
    toolInUse.textContent = 'Please select a tool to start drawing...';
    deletePreviousSketchArea(sketchArea);
    let gridArea = rowSize * rowSize;

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${SKETCH_AREA_WIDTH / rowSize}px`;
        square.style.height = `${SKETCH_AREA_WIDTH / rowSize}px`;
        sketchArea.appendChild(square);
    }

    /**
     * Assignment is only done at this stage because if it was done at the top of the script
     * it would always return an empty NodeList
     * */
    squaresList = document.querySelectorAll('.square');
});

clearAreaBtn.addEventListener('click', function () {
    if (squaresList) {
        squaresList.forEach(square => {
            square.style.backgroundColor = '#fff';
        });
    }
});

pencilBtn.addEventListener('click', function () {
    toolInUse.textContent = '✏️';
    if (squaresList) {
        squaresList.forEach(square => {
            square.addEventListener('mouseenter', function (e) {
                e.target.style.backgroundColor = '#000';
            });
        });
    }
});

rainbowBtn.addEventListener('click', function () {
    toolInUse.textContent = '🌈';
    if (squaresList) {
        squaresList.forEach(square => {
            square.addEventListener('mouseenter', function (e) {
                const hexColor = generateRandomHexColor();
                e.target.style.backgroundColor = hexColor;
            });
        });
    }
});

darkerBtn.addEventListener('click', function () {
    toolInUse.textContent = '🌚';
    let lightness = 100;
    if (squaresList) {
        squaresList.forEach(square => {
            square.addEventListener('mouseenter', function (e) {
                e.target.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
                lightness -= 10;
                console.log(lightness);
                if (lightness === 0) {
                    lightness = 100;
                }
            });
        });
    }
});

eraserBtn.addEventListener('click', function () {
    toolInUse.textContent = '🧽';
    if (squaresList) {
        squaresList.forEach(square => {
            square.addEventListener('mouseenter', function (e) {
                e.target.style.backgroundColor = '#fff';
            });
        });
    }
});

function deletePreviousSketchArea(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

function generateRandomChar(length) {
    return Math.floor(Math.random() * length);
}

function generateRandomHexColor() {
    const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexCharacters[generateRandomChar(hexCharacters.length)];
    }
    return hexColor;
}
