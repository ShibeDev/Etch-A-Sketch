var color = "black";

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function makeSquareGrid(col){
    removeAllChildNodes(content);
    content.style.gridTemplateColumns= `repeat(${col},auto)`;
    for(i = 0; i < (col* col); i++){
        let cell = document.createElement('div');
        content.appendChild(cell).className = 'grid-items';
    };
};

function colorGrid(e){
    e.target.style.backgroundColor = color;
}

const content = document.querySelector('#rightPanel');


var slider = document.getElementById("myRange");
const sliderVals = Array.from(document.querySelectorAll('.sliderVal'));
sliderVals.forEach(sliderval => sliderval.textContent = slider.value);
makeSquareGrid(16);
var grids = Array.from(document.querySelectorAll('.grid-items'));
grids.forEach(grid => grid.addEventListener('mouseenter',colorGrid));

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    sliderVals.forEach(sliderval => sliderval.textContent = slider.value);
    makeSquareGrid(slider.value);
    grids = Array.from(document.querySelectorAll('.grid-items'));
    grids.forEach(grid => grid.addEventListener('mouseenter',colorGrid));
}
