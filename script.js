const SKETCH_AREA_WIDTH = 680;
const sketchArea = document.querySelector('.grid');
const createAreaBtn = document.querySelector('#create');

let rowSize = 16; // Starting... User will be able to choose
console.log(SKETCH_AREA_WIDTH / rowSize);

createAreaBtn.addEventListener('click', function () {
    let gridArea = rowSize * rowSize;
    console.log(gridArea);

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${SKETCH_AREA_WIDTH / rowSize}px`;
        square.style.height = `${SKETCH_AREA_WIDTH / rowSize}px`;
        sketchArea.appendChild(square);
    }
});
