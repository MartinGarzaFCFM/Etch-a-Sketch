
//const variables
const size = 16;

//const Elements
const body = document.querySelector("body");
const grid = document.querySelector("#grid");
const gridBtn = document.querySelector("#grid-set-amount");

//Create grid
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener("mouseover", function(e){
            if (this.style.filter) {
                let origFilter = this.style.filter;
                let regExp = /\(([^)]+)\)/;
                let matches = regExp.exec(origFilter);
                
                matches[1] -= .1;

                this.style.filter = `brightness(${matches[1]})`;
            }
            else{
                let randomColor = Math.floor(Math.random()* 16777215).toString(16);
                this.style.backgroundColor = "#" + randomColor;
                this.style.filter = "brightness(1)";
            }

        });

        grid.append(square);
    }
}

//gridBtn Functions
gridBtn.addEventListener("click", function(){
    let inputAmount = prompt("How many squares do we make?");
    if (!isNaN(inputAmount)) {
        if (inputAmount <= 100) {
            grid.innerText = "";
            setupGrid(inputAmount);
        }
        else{
            alert("Too many, make it less than 100.");
        }
    }
    else{
        alert("Entered an invalid Input!");
    }
});


//StartUp
setupGrid(size);