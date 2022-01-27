
const container = document.getElementById("container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");


defaultGrid();
function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}


function makeRows(rowNum){
    for (r = 0; r < rowNum; r++) {
        let newRow = document.createElement("div");
        container.appendChild(newRow).className = "row";
    };
}; 

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
             let newCell = document.createElement("div");
             rows[j].appendChild(newCell).className = "cell";
        };
    };
}; 

// add rainbow colors to divs when mouseover
document.getElementById("rainbow").addEventListener("click", addColorGrid);
const color = [, "#FF7F50", "#FFD700", "#98FB98", "#1E90FF", "#DA70D6" , "#FF4500"];

function addColorGrid(){
    document.querySelectorAll(".cell, .lines").forEach((cell) => {
        cell.addEventListener("mouseover" , (e) => {
         cell.style.background = color[Math.floor(Math.random() * color.length)];
        });
     });    
};


 // add black color to divs when mouseover
 document.getElementById("black").addEventListener("click", addBlackGrid);
 
 function addBlackGrid() {
     document.querySelectorAll(".cell, .lines").forEach((cell) => {
         cell.addEventListener("mouseover" , (e) => {
         cell.style.background = "black";
      });
    });
 }


//erase colors on the grid

document.getElementById("erase").addEventListener("click", eraseColors);

function eraseColors(){
    document.querySelectorAll(".cell, .lines").forEach((cell) => {
        cell.addEventListener("mouseover" , (e) => {
        cell.style.background = "white";
    });
});
}


// remove all grid lines

let element = document.querySelectorAll(".cell");
for (let i = 0; i < element.length; i++) {
    element[i].classList.add("lines");
}


const cbox = document.querySelectorAll(".cell");
function toggleBorder(){
for (let i = 0; i < cbox.length; i++) {
      cbox[i].classList.toggle("cell");
    };
};


// toggle add lines button 

function removeLines() { 
var t = document.getElementById("remove");
if(t.innerHTML=="Remove lines"){
    t.innerHTML="Add lines";}
else{
    t.innerHTML="Remove lines";}

}


//clear the grid
document.getElementById("clear").addEventListener("click", clearGrid);

function clearGrid() {
    document.querySelectorAll(".cell, .lines").forEach((cell) => {
        cell.style.background = "white";
    });
}

const mySound = document.getElementById('sound');

function playSound() {
    if (!mySound) return;
      mySound.currentTime = 0;
      mySound.play();  

};


// create value range slider 
let slider = document.getElementById("myRange");
let output = document.getElementById("size");
output.innerHTML = "Grid size : " + slider.value + " x " + slider.value;

slider.oninput = function() {
  output.innerHTML = "Grid size : " + this.value + " X " + this.value;
}

