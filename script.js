//DOM ELEMENTS
const reset_button = document.getElementById("reset");
const gridContainer_div = document.querySelector(".grid-container")


//MAKE GRID
function makeGrid(col, row){
    for(let i=0; i<col*row; i++){
        let square = document.createElement('div');
        square.classList.add("square");
        gridContainer_div.appendChild(square);

   
        }
    gridContainer_div.style.gridTemplateColumns = `repeat(${col},auto)`; 
    gridContainer_div.style. gridTemplateRows = `repeat(${row},auto)`;
    }



console.log(gridContainer_div.style.gridTemplateColumn)

makeGrid(5,5);