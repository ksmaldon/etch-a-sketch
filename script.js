//DOM ELEMENTS
const gridContainer_div = document.querySelector(".grid-container")
const size_button = document.getElementById("size");
const reset_button = document.getElementById("reset");


function makeGrid(value){
    for(let i=0; i<(value*value); i++){
        let square = document.createElement("div");
        gridContainer_div.appendChild(square).classList.add("square", i);
        square.addEventListener('mouseover',()=>colorChange(square));
        reset_button.addEventListener('click', ()=>resetGrid(square));
    }
    gridContainer_div.style.gridTemplateColumns = `repeat(${value},1fr)`; 
    gridContainer_div.style. gridTemplateRows = `repeat(${value},1fr)`;
}  
    


function colorChange(square){
    square.classList.add("color-change");
}


function resetGrid(square){
    square.classList.remove("color-change");
}


size_button.addEventListener('click', ()=>{
   let userInput = prompt("Enter a number between 1-100");
    if (userInput > 100|| userInput<1){
       prompt("Try again!") 
    }else{
       makeGrid(userInput)
    } 
});


window.onload(makeGrid(16));




//<------------------TODO------------------------>
//Add function to size button:
//---prompt user to input number between 1-100
//---run makeGrid function with user input as function argument
//---set restrictions on max and min size
//---reset the grid
//Eventually replace prompt with 3 buttons (specific size options: 10x10, 30x30, 60x60)


//Add 2 buttons to customise color:
//--rainbow button: change square to random RGB color
//--black button: change square to black(default option)

//Add button to toggle grid on and off

//<------------PROBLEMS IM CURRENTLY FOCUSING ON-------------------------->
//size button does not work correctly on second click
//--need to reset DOM/remove previously created divs before appending new ones
//--need to remove class color-change