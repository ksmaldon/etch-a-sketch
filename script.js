//DOM ELEMENTS
const reset_button = document.getElementById("reset");
const gridContainer_div = document.querySelector(".grid-container")


//MAKE GRID
function makeGrid(num){
for(let i=0; i<num; i++){
   let square = document.createElement('div')
   gridContainer_div.appendChild(square); 
   square.classList.add("square")
    }
    
}

makeGrid(16);