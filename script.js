
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

// add color to divs when mouseover

const color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];

 
document.querySelectorAll(".cell").forEach((cell) => {
     cell.addEventListener("mouseover" , (e) => {
        cell.style.background = color[Math.floor(Math.random() * color.length)];
        });
 });    


  



