// SCOPE

function f1() {
  var a = 10;
}
console.log(a); // ERROR
//
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // ERROR
//
{
  const x = 2;
  console.log(x);
}
console.log(x); // ERROR


// Hoisting
x = 8; 

console.log(x);

var x; // OK
//
x = 8; 

console.log(x);

let x; // re-declare

//
x = 8;  

console.log(x);

const x; // re-declare & Error (needs a default value)

// Reassign the value

var v1 = 1;

v1 = 30; // OK

console.log(v1);

///

let v1 = 1;

v1 = 30;

console.log(v1);

//

const v1 = 1;

v1 = 30; // Error

console.log(v1);


// redeclaration 
var v1 = 1;

var v1 = 30;

console.log(v1);

//

let v1 = 1;

let v1 = 30; // error

console.log(v1);

//

const v1 = 1;

const v1 = 30; // error

console.log(v1)