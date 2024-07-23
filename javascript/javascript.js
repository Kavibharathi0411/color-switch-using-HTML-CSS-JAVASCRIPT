const colors = ["red", "green", "blue", "yellow", "purple"];
const colorBox = document.getElementById("color-box");
const changeColorBtn = document.getElementById("change-color-btn");

let colorIndex = 0;

function changeColor() {
    colorBox.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    if (colorIndex === colors.length) {
        colorIndex = 0;
    }
}
changeColorBtn.addEventListener("click",changeColor); 