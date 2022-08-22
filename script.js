/* constants and variables for grid color and modes */
const BW_MODE = 0;
const RAINBOW_MODE = 1;
const RANDOM_MODE = 2;
const rainbowColors = ["Red","Orange","Yellow","Green","Blue","Indigo","Violet"]
var mode = BW_MODE;
var color = "black";
var rainbowCounter = 0;

/* helper function to remove all grid cells when resetting grid */
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

/* Remove all grid cells, re-add col^2 cells to grid panel*/
/* Then call helper function to re-add mouse over event listener to each cell */
function makeSquareGrid(col){
    removeAllChildNodes(content);
    content.style.gridTemplateColumns= `repeat(${col},auto)`;
    for(i = 0; i < (col* col); i++){
        let cell = document.createElement('div');
        content.appendChild(cell).className = 'grid-items';
    };
    initialzieGrid();
};

/* function to set background color of grid cell based on mode */
function colorGrid(e){
    if (mode === BW_MODE) e.target.style.backgroundColor = color;
    else if (mode === RAINBOW_MODE){ 
        e.target.style.backgroundColor = rainbowColors[rainbowCounter];
        rainbowCounter = (rainbowCounter + 1) % 7;
    }
    /* random color mode picks a random color as long as its not white */
    else{
        color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        while(color==="#ffffff"){
            color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
        }
        e.target.style.backgroundColor = color;
            
    }
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
    mode = BW_MODE;
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
              break;
            case "3":
                color = "black";
                mode = BW_MODE;
            break;
            case "4":
                mode = RAINBOW_MODE;
            break;
            case "5":
                mode = RANDOM_MODE;
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
