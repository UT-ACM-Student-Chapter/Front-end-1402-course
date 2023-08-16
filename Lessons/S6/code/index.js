//
console.log("Hello");

// variable keywords

var name = "Parna";
console.log("🚀 ~ file: index.js:5 ~ name:", name);

let lastName = "Asadi";
console.log("🚀 ~ file: index.js:8 ~ lastName:", lastName);

lastName = "Danesh";
console.log("🚀 ~ file: index.js:11 ~ lastName:", lastName);

const age = 25;

// Data types

// 1 - Primitive
const isMale = true; // Boolean
const height = 180; // Number
const Name = "String";
const selection = null;
const anom = undefined;

console.log(typeof anom);

// 2- Ref type

// array
const array = [1, 2];
// array[2] = 10;
array.push(10);
console.log("🚀 ~ file: index.js:26 ~ array:", array);
let index = array.join("");
console.log("🚀 ~ file: index.js:30 ~ array:", index);

// object
const person = {
  name: "Ali",
  lastName: "Alian",
};
let select = "name";
console.log(person[select]);
console.log(person.name); // best

// function 
function welcomeWithName(name) {
  return "Hello " + name;
}

function logName(name) {
  console.log("Hey " + name);
}

let r = welcomeWithName(person.name);
console.log("🚀 ~ file: index.js:45 ~ r:", r);

logName(name);

console.log(welcomeWithName(person.name)); // Q? // 2

const five = 2 + 5;

// After learning event: 

const input = document.getElementsByTagName("INPUT")[0];
console.log("🚀 ~ file: index.js:58 ~ input:", input);

input.addEventListener("change", function alertMessage(event) {
  alert(event.target.value);
});
