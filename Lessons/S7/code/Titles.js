const Log = console.log.bind(console);
// Comparision

// always Boolean

Log(2 > 1); // true

Log(2 < 1); // false

Log(13 <= 14); // true

Log(10 >= 7); // true

Log("a" < "b"); // true

Log("0" == 0); // true

Log("abc" > "abb"); // true

Log(!true); // false

// Fun note!

let a = 0;
Log(Boolean(a)); // false

let b = "0";
Log(Boolean(b)); // true

Log(a == b); // true

Log(a === b); // false

Log(a !== b); // true

let a2 = "132";
let b2 = 132;

Log(a2 == b2); // true
Log(a2 === b2); //false

let n = null;
let und = undefined;

Log(n == und); // true
Log(n !== und); // true

// build in functions

let answer = prompt("How are you?", ""); // default for IE
alert("Welcome!");
let ok = confirm("Are you sure?");

// if else

let age = prompt("How old are you?", ""); // always is string
if (Number(age) > 18) {
  alert("You are a child!");
} else {
  alert("Welcome!");
}

let number = null; // 1 , -4 , 81 -> OK!, Close!, False

if (!number) {
  alert("please enter a number between"); // call
} else if (number > 0 || number < 11) {
  alert("OK!");
} else if (number <= 0 && number % 2 === 0) {
  alert("Close!");
} else {
  alert("False");
}

// ternary
const height = 174;
let allowed = null;
if (height < 160) {
  allowed = true;
} else {
  allowed = false; // call
}

// //  alternative

allowed = height < 160 ? true : false;

// // or

function call(phone) {
  window.location.href = `tel:${phone}`;
}

let phone = "09111111111";
if (phone.length === 11 && phone.slice(0, 2) === "09") {
  call(phone); // call
} else {
  console.error("Wrong number!");
}

phone.length === 11 && phone.slice(0, 2) === "09"
  ? call(phone)
  : console.error("Wrong number");

// switch

function checkNumber(number) {
  let isOdd = null;
  if (number === 0) {
    isOdd = true;
  }
  if (number === 1) {
    isOdd = false;
  }
  if (number === 2) {
    isOdd = true;
  }
  // ...
  return isOdd;
}

Log(checkNumber(2)); // true

// // instead

function AdvancedCheckNumber(number) {
  let isOdd = null;
  switch (number) {
    case 0:
      isOdd = true;
      break;
    case 1:
      isOdd = false;
      break;
    case 2:
      isOdd = true;
      break;
    default:
      isOdd = NaN;
      break;
  }
  return isOdd;
}

Log(AdvancedCheckNumber(1)); // false

function EvenMoreAdvancedCheckNumber(number) {
  switch (number) {
    case 0:
    case 2:
    case 4:
      return true;
      break; // useless
    case 1:
    case 3:
    case 5:
      return false;
      break; // useless
    default:
      return NaN;
      break; // useless
  }
}

Log(EvenMoreAdvancedCheckNumber(3)); // false

// This in Object

const Person = {
  name: "Parna",
  lastName: "Asadi",

  sayHi: function () {
    Log("Hi " + this.name);
  },

  sayBuy() {
    Log("Bye " + this.name);
  },
};

Person.sayHi();
Person.sayBuy();

// Arrow function - es6

let isCorrect = (a, b) => a > b;

let isFat = (weight) => (weight > 200 ? true : false);

let isTall = (height) => {
  if (height > 180) {
    return true;
  } else {
    return false;
  }
};

// one compare to function
const Car = {
  brand: "BMW",
  year: "1980",

  showYear: () => {
    Log(this.brand); // wrong!!!
  },
};

// Class

class Food {
  #goodQuality = true; // private variable

  constructor(name, _price) {
    this.name = name;
    this.taste = "Yummy!";
    this.price = _price ?? 13;
  }

  AboutFood() {
    return `It is ${this.price}$ and its taste is ${this.taste}`;
  }

  GetPrice() {
    return this.price;
  }

  #getGoodQuality() {
    // private function
    return this.#goodQuality;
  }

  static comparePrice(f1, f2) {
    // belongs to Class not an instance
    return f1.price - f2.price;
  }
}

const Kiwi = new Food("Kiwi", 20);

const Apple = new Food("Apple");
Log(Apple.AboutFood());

/* Log(Apple.#getGoodQuality); // error  */

class Button {
  constructor() {}

  onClick() {
    Log("Hello!");
  }
}

const btn1 = new Button();

btn1.onClick();

// Elements

// simple todo list

const input = document.getElementById("task");
const list = document.getElementsByClassName("list")[0];
const btn = document.querySelector("BUTTON[type=submit]");

btn.onclick = () => {
  let str = input.value;
  const task = document.createElement("li");
  task.innerText = str;
  list.appendChild(task);
};

const reset = document.createElement("button");
reset.innerHTML = `<h6>clear list</h6>`;
reset.addEventListener("click", () => {
  const children = list.getElementsByTagName("li");
  for (let i = 0; i < children.length; i++) {
    list.removeChild(children[i]);
  }
  // or
  /*    
        let child = list.lastElementChild;
        while(child){
            list.removeChild(child);
            child = list.lastElementChild;
        }
  */
});

document.body.appendChild(reset);
