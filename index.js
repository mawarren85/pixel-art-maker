let getGridContainer = document.getElementById("grid");

/* -------------------------Make grid squares -----------------------*/
function makeGridSquares() {
  for (let i = 0; i < 1824; i++) {
    let individualGridSquare = document.createElement('div');
    individualGridSquare.setAttribute("class", "grid-square");
    individualGridSquare.setAttribute("id", "square" + i);
    //individualGridSquare.addEventListener("mouseenter", paintBrushMove);

    getGridContainer.appendChild(individualGridSquare)
  }
}
makeGridSquares()

/* -------------------------Make paint palette -----------------------*/
let getSwatchBox = document.getElementById("swatchBox")
let swatchColor;
let paintColors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkGrey", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat"];

function makeSwatch() {
  for (let i = 0; i < paintColors.length; i++) {
    let swatchLink = document.createElement('a');
    swatchColor = document.createElement('div');
    swatchColor.setAttribute("class", paintColors[i]);
    swatchColor.style.backgroundColor = paintColors[i]
    swatchLink.appendChild(swatchColor)
    getSwatchBox.appendChild(swatchLink)
  }
}
makeSwatch();

/* -------------------------Event Listeners -----------------------*/

/* -------------------------Paint square on click-----------------------*/

let colorPicked;

function paintSquare(squareClicked) {
  if (squareClicked.target.style.backgroundColor === colorPicked.toLowerCase()) {
    squareClicked.target.style.backgroundColor = "white";
  } else {
    squareClicked.target.style.backgroundColor = colorPicked;
  }
}
getGridContainer.addEventListener("click", paintSquare);

/* ---------------Paint square with paintbrush-----------------------*/
let isDown;

function paintBrushDown(squares) {
isDown = true;
}

function paintBrushUp(noPaint) {
isDown = false;
}

function paintBrushMove(squares) {
if (isDown) {
  squares.target.style.backgroundColor = colorPicked;
}
}

getGridContainer.addEventListener("mousedown", paintBrushDown);
getGridContainer.addEventListener("mouseup", paintBrushUp);
getGridContainer.addEventListener("mouseover", paintBrushMove);


/* -------------------------Pick Color -----------------------*/
function pickColor(color) {
  colorPicked = color.target.className
  let showCurrent = document.getElementById("paint-can");
  showCurrent.style.backgroundColor = colorPicked;
}
getSwatchBox.addEventListener("click", pickColor)

/* -------------------Add active color border ----------------*/
let previousColor;

function highlightColor(currentColor) {
  if (previousColor === undefined) {
    previousColor = previousColor
  } else {
    previousColor.parentElement.classList.toggle("selected")
  }
  currentColor.target.parentElement.classList.toggle("selected")
  previousColor = currentColor.target
}
getSwatchBox.addEventListener("click", highlightColor);

/* -------------------Erase--------------------------*/

let eraser = document.getElementById("eraser");

eraser.addEventListener("click", function () {
colorPicked = "white";
})

/* -------------------Trash--------------------------*/
let trash = document.getElementById("trash")
trash.addEventListener("click", function() {
  let getAllGrid = document.getElementsByClassName("grid-square")
  for(let i =0; i < getAllGrid.length; i++) {
    getAllGrid[i].style.backgroundColor="white";
  }

})
