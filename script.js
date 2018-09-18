/* 
   Project: Etch-a-Sketch.
   Developper : Anis Bouhadida.
   File: script.js
   Last-update: 18/09/2018.

   Summary:
   ========
   1/ Create grid.
   2/ Change color randomly.
   3/ Reset grid.
   ========
*/

/* 
   1/ Create grid:
   ===============
*/
let container = document.querySelector(".container");

function createGrid(width) {
   for (let row = 0; row < width; row++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("gridRow");
      gridRow.style.height = (100 / width) + "%";
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

/* 
   2/ Change color randomly:
   =========================
*/
function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColor() {
   let cell = document.querySelectorAll(".grid");
   cell.forEach(cel => {
      cel.addEventListener("mouseenter", (e) => {
         e.target.style.backgroundColor = "rgb(" + getRandomIntInclusive(0, 225) + "," + getRandomIntInclusive(0, 225) + "," + getRandomIntInclusive(0, 225) + ")";

      })
   });
}

/* 
   3/ Reset grid:
   ==============
*/
function reset() {
   let children = document.querySelectorAll(".gridRow");
   children.forEach(child => {
      container.removeChild(child);
   })
   let getGridSize = prompt("give a size for the grid", "16");
   createGrid(getGridSize);
}