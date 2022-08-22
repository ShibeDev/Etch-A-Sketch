var color = "black";
var rainbowCounter = 0;
var rainbowMode = false;
const rainbowColors = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"]

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
    initialzieGrid();
};

function colorGrid(e){
    if (rainbowMode){ 
        e.target.style.backgroundColor = rainbowColors[rainbowCounter];
        rainbowCounter = (rainbowCounter + 1) % 7;
    }
    else  e.target.style.backgroundColor = color;
}

function initialzieGrid()
{
    grids = Array.from(document.querySelectorAll('.grid-items'));
    grids.forEach(grid => grid.addEventListener('mouseenter',colorGrid));
}

function resetGrid()
{
    makeSquareGrid(16);
    color = "black";
    slider.value = 16;
    sliderVals.forEach(sliderval => sliderval.textContent = slider.value);
}

const content = document.querySelector('#rightPanel');
var slider = document.getElementById("myRange");
const sliderVals = Array.from(document.querySelectorAll('.sliderVal'));
sliderVals.forEach(sliderval => sliderval.textContent = slider.value);
makeSquareGrid(16);
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    button.addEventListener('click' , () => {
        switch(button.id) {
            case "1":
                resetGrid();
              break;
            case "2":
                color = "white";
                rainbowMode = false;
              break;
            case "3":
                color = "black";
                rainbowMode = false;
            break;
            case "4":
                rainbowMode = true;
            break;
            default:
              break;
          }
    });
});

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    sliderVals.forEach(sliderval => sliderval.textContent = slider.value);
    makeSquareGrid(slider.value);
}
