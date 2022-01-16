
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
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.addEventListener("mouseover" , (e) => {
         cell.style.background = color[Math.floor(Math.random() * color.length)];
        });
     });    
};


 // add black color to divs when mouseover
 document.getElementById("black").addEventListener("click", addBlackGrid);
 
 function addBlackGrid() {
     document.querySelectorAll(".cell").forEach((cell) => {
         cell.addEventListener("mouseover" , (e) => {
         cell.style.background = "black";
      });
    });
 }


//erase colors on the grid

document.getElementById("erase").addEventListener("click", eraseColors);

function eraseColors(){
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.addEventListener("mouseover" , (e) => {
        cell.style.background = "white";
    });
});
}


// remove all the grid lines
document.getElementById("remove").addEventListener("click", removeLines);

function removeLines(){
    document.querySelectorAll('.cell').forEach((cell) => {
            cell.style.borderStyle = "hidden";
    });
}

//clear the grid
document.getElementById("clear").addEventListener("click", clearGrid);

function clearGrid(){
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.style.background = "white";
    });
}














