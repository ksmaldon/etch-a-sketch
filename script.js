//DOM ELEMENTS
const gridContainer_div = document.querySelector(".grid-container")
const size_button = document.getElementById("size");
const reset_button = document.getElementById("reset");
const rainbow_button = document.getElementById("rainbow");
const black_button = document.getElementById("black");
const ten_button = document.getElementById("ten");
const twenty_button = document.getElementById("twenty");
const thirty_button = document.getElementById("thirty");
const forty_button = document.getElementById("forty");
const mode_p = document.getElementById("mode");

//VARIABLES   
let rainbowIsPressed = false;
let blackIsPressed = false;
let greyIsPressed = false;
let value;

//FUNCTIONS
makeGrid(16);

function makeGrid(value){
    for(let i=0; i<(value*value); i++){
        let square = document.createElement("div");
        gridContainer_div.appendChild(square).classList.add("square");
        square.addEventListener('mouseover',()=>colorChange(square));
    }
    gridContainer_div.style.gridTemplateColumns = `repeat(${value},1fr)`; 
    gridContainer_div.style. gridTemplateRows = `repeat(${value},1fr)`;
}  
    

function colorChange(square){
    if(blackIsPressed===true){
    square.style.background=("black");

    }else if (greyIsPressed===true){
    let rNum = Math.floor(Math.random()*256)
    square.style.background =`rgb(${rNum}, ${rNum}, ${rNum})`;

    }else if (rainbowIsPressed===true){
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
    square.style.background = `rgb(${r}, ${g}, ${b})`;
    }

}


function reset(){
    gridContainer_div.querySelectorAll('.square').forEach(el => el.style.removeProperty("background"));
}

function removeButtonStyle(){
    document.querySelectorAll(".button").forEach(el => el.style.removeProperty("background"));
    document.querySelectorAll(".button").forEach(el => el.style.removeProperty("color"))
    
}

//BUTTONS

ten_button.addEventListener('click',()=>{
    gridContainer_div.querySelectorAll('.square').forEach(el => el.remove());
    rainbowIsPressed =false;
    blackIsPressed = true;
    removeButtonStyle();
    ten_button.style.cssText='color:white; background:#e66465;';
    makeGrid(10);
})




twenty_button.addEventListener('click',()=>{
    gridContainer_div.querySelectorAll('.square').forEach(el => el.remove());
    rainbowIsPressed =false;
    blackIsPressed = true;
    removeButtonStyle();
    twenty_button.style.cssText='color:white; background:#e66465';
    makeGrid(20);
})



thirty_button.addEventListener('click',()=>{
    gridContainer_div.querySelectorAll('.square').forEach(el => el.remove());
    rainbowIsPressed =false;
    blackIsPressed = true;
    removeButtonStyle();
    thirty_button.style.cssText='color:white; background:#e66465';
    makeGrid(30);
})

forty_button.addEventListener('click', ()=>{
    gridContainer_div.querySelectorAll('.square').forEach(el => el.remove());
    rainbowIsPressed =false;
    blackIsPressed = true;
    removeButtonStyle();
    forty_button.style.cssText='color:white; background:#e66465';
    makeGrid(40); 
})

reset_button.addEventListener('click', ()=>{
    reset();
})


rainbow_button.addEventListener('click', ()=>{
    rainbowIsPressed =true;
    blackIsPressed = false;
    reset()
   console.log(mode_p.textContent=`Mode: ${"Rainbow"}`); 
})

black_button.addEventListener('click', ()=>{
    rainbowIsPressed =false;
    blackIsPressed = true;
    reset()
    mode_p.textContent=`Mode: ${"Black"}`;
})





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