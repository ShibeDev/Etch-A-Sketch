
const content = document.querySelector('#rightPanel');
function makeSquareGrid(col){
    content.style.gridTemplateColumns= `repeat(${col},auto)`;
    for(i = 0; i < (col* col); i++){
        let cell = document.createElement('div');
        content.appendChild(cell).className = 'grid-items';
    };
};

makeSquareGrid(16);
