var color = "black";

function makeSquareGrid(col){
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
makeSquareGrid(16);
const grids = Array.from(document.querySelectorAll('.grid-items'));
grids.forEach(grid => grid.addEventListener('mouseenter',colorGrid));

