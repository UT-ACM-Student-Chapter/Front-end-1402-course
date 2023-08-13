// Select elements from document:

// get elementS by a query
var numbers = document.querySelectorAll(".numpad-dialer input[type=button]");
console.log(" ~ numbers:", numbers);

var operators = document.querySelectorAll(".function-dialer input");
console.log(" ~ operators:", operators);

// get A element by its ID
var equal = document.getElementById("operate");
console.log(" ~ equal:", equal);

// get A element by a query
// another way of catching = button
// var equal2 = document.querySelector("#operate");
// console.log(" ~ equal2:", equal2);

// another way of catching = button
// var equal3 = document.querySelectorAll(".numpad-dialer #operate");
// console.log(" ~ equal3:", equal3[0]);

// get elementS by class name
var last_state = document.getElementsByClassName("previous-operand");
console.log(" ~ last_state:", last_state[0]);

// get elementS by Tag name
var output = document.getElementsByTagName("INPUT")[0];
console.log(" ~ output:", output);

var clear_button = null; /* how to get it??? */

// type of loop in js "for"
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  // add eventListener on Click event
  number.addEventListener("click", function (event) {
    last_state[0].innerHTML += event.target.value;
  });
}

// type of loop in js "foreach"
operators.forEach(function (node) {
  node.addEventListener("click", function (event) {
    let str = last_state[0].innerHTML;
    let last_char = str[str.length - 1];
    // if last char was a operand, replace it with new operand
    if (
      last_char === "+" ||
      last_char === "-" ||
      last_char === "×" ||
      last_char === "÷"
    ) {
      str = str.substring(0, str.length - 1); // get a substring from a string
      last_state[0].innerHTML = str + event.target.value;
    } else {
      last_state[0].innerHTML += event.target.value;
    }
  });
});

equal.addEventListener("click", function (event) {
  event.preventDefault();

  var input_str = last_state[0].innerHTML;
  // split numbers from user input
  var digits = input_str.split(/\+|\-|\×|\÷/g);

  // split operators from user input
  var operators = input_str.replace(/[\d]|\./g, "").split("");

  // division operator
  var divide = operators.indexOf("÷");
  while (divide != -1) {
    digits.splice(divide, 2, digits[divide] / digits[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  // multiply operator
  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    digits.splice(multiply, 2, digits[multiply] * digits[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  // subtract operator
  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    digits.splice(subtract, 2, digits[subtract] - digits[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  // add operator
  var add = operators.indexOf("+");
  while (add != -1) {
    digits.splice(
      add,
      2,
      parseFloat(digits[add]) + parseFloat(digits[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  last_state.innerHTML = "";

  output.value = digits[0];
});

// clearing the input on press of clear
document.getElementById("delete-button").addEventListener("click", function () {
  last_state[0].innerHTML = "";
  output.value = null;
});
