let container = document.querySelector(".container");

function createGrid(width, height) {
   for (let row = 0; row < height; row++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("gridRow");
      gridRow.style.height = (100 / height) + "%";
      for (let colomn = 0; colomn < width; colomn++) {
         const grid = document.createElement("div");
         grid.classList.add("grid");
         grid.style.width = (100 / width) + "%";
         gridRow.appendChild(grid);
      }
      container.appendChild(gridRow);
   }
   changeColor();
}


function changeColor() {
   let cell = document.querySelectorAll(".grid");
   cell.forEach(cel => {
      cel.addEventListener("mouseover", (e) => {
         e.target.style.backgroundColor = "#" + e.screenX + e.screenY;
      })
   });
}

function reset() {
   let children = document.querySelectorAll(".gridRow");
   children.forEach(child => {
      container.removeChild(child);
   })
   let askSize = prompt("give a size for the grid", "16x16");
   let gridSize = askSize.split("x");
   createGrid(gridSize[0], gridSize[1]);
}