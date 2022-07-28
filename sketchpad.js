const main = document.querySelector("#main");
const boxStyle = document.querySelector("#box-style");
const clear = document.querySelector("#clear");

let grid = 16;


createGrid();

function createGrid() {
let gridSize = `${800/grid}px`;

    for (i=1;i<=(grid*grid);i++){
        let box = document.createElement('div');
        box.setAttribute('id','box-style');
        box.style.width = gridSize;
        box.style.height = gridSize;
        box.classList.add ('tracker');
        box.addEventListener('mouseover',colorBlack);
        main.appendChild(box);    
    } 
}


function colorBlack(e) {
    e.target.classList.add ('black');
}

clear.addEventListener('click',clearAll);

function clearAll() {
    const tracker = document.getElementsByClassName("tracker");
    while (tracker[0]) {
        main.removeChild(tracker[0]);
    }
    newGridSize();
    createGrid();

}

function newGridSize(){
    grid = parseInt(prompt("enter your canvas size","16"));
    for (i=0;i<Infinity;i++) {
        if (grid > 100){
            grid = parseInt(prompt("please enter a smaller number","100"));
        }
        else {
            return;
        }
    }
    
}