//DOM ELEMENTS
const reset_button = document.getElementById("reset");
const gridContainer_div = document.querySelector(".grid-container")
let square

console.log(reset_button);

//MAKE GRID
function makeGrid(col, row){

    for(let i=0; i<col*row; i++){
        square = document.createElement('div');
        square.classList.add("square");
        gridContainer_div.appendChild(square);
    }
    //GRID STYLE
    gridContainer_div.style.gridTemplateColumns = `repeat(${col},auto)`; 
    gridContainer_div.style. gridTemplateRows = `repeat(${row},auto)`;
    
    //HOVER EFFECT
    const squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener('mouseover', ()=>{
            square.classList.add("color-change");   
        })

        reset_button.addEventListener('click',()=>{
        square.classList.remove("color-change");
    })
    })
    
    
    

}




makeGrid(100,100);