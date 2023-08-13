var colors = [];
var pickedColor;

// todo
// select squeres in html -> find the right query
var squares = document.querySelectorAll("?");
// -end
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

// todo
// select reset button - use Get by ID
var resetButton = null;
// -end

// todo
// how to start this game? :)
// here :::::::::
// hint: just a funtion call to begin the game
// another hint ↓ call init
// -end

function init() {
  colorDisplay.textContent = pickedColor;
  setupSquares();
  reset();
}

resetButton.addEventListener("click", function () {
  // todo
  // call reset function here:)
  // -end
});

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      // todo
      //  if the clicked color was picked color,
      /*
		messageDisplay inner text = "you goddamn right!"
		resetButton innet text =  "Play Again"
		call another round :D -> changeColors
   		*/

      //  else
      /*
		backdround of this clicked color turn to #232323
		messageDisplay inner text = "Come on!"
   		*/
      // -end
    });
  }
}

function reset() {
  colors = genRandomColors();
  pickedColor = chooseColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#2C8E99";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;
  }
}

function chooseColor() {
  // todo
  //  choose a random number between 0 to 5 -> Math. (ceil, random) : javascript funtions 
  // https://www.geeksforgeeks.org/javascript-math-random-method/#:~:text=The%20Javascript%20Math.,%2C%20and%201%20(exclusive).
  var random = 0;
  // -end
  return colors[random];
}

function genRandomColors() {
  var arr = [];
  // todo
  //  return an array of six(6) random colors
  // hint: makeColor returns a random color, use array and push a element in a "for" loop
  // -end
  return arr;
}

function makeColor() {
  var r = Math.floor(Math.random() * 256); // what does it do? - hint for the next todo
  // todo
  // select random numbers for r, g, b
  var g = 0;
  var b = 0;
  // -end

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
