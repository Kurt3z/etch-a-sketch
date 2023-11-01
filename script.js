const SKETCH_AREA_WIDTH = 680;
const sketchArea = document.querySelector('.grid');
const createAreaBtn = document.querySelector('#create');
const clearAreaBtn = document.querySelector('#clear');
const rowSizeSelection = document.querySelector('#row-size');
const displayRowSizeSelection = document.querySelectorAll('.selected');
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

    squaresList.forEach(square => {
        square.addEventListener('mouseenter', function (e) {
            e.target.style.backgroundColor = '#000';
        });
    });
});

clearAreaBtn.addEventListener('click', function () {
    if (squaresList) {
        squaresList.forEach(square => {
            square.style.backgroundColor = '#fff';
        });
    }
});

function deletePreviousSketchArea(parentElement) {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}
