const grandpa = document.getElementsByClassName("grandpa")[0];
// console.log("🚀 ~ file: Event.js:2 ~ grandpa:", grandpa);

const parent = document.querySelector(".parent");
// console.log("🚀 ~ file: Event.js:5 ~ parent:", parent);

const child = document.getElementById("child");
// console.log("🚀 ~ file: Event.js:8 ~ child:", child);

grandpa.addEventListener(
  "click",
  function log() {
    console.log("Hi from grandpa");
  },
  { capture: true } // first element who get the recent event
);

grandpa.addEventListener(
  "click",
  function log() {
    console.log("Hi from grandpa 2");
  },
  { once: true } // only run once when catched
);

parent.addEventListener("click", function log() {
  console.log("Hi from parent");
});

child.addEventListener("click", function log(event) {
  event.stopPropagation(); // event will not be propagated
  console.log("Hi from child");
});

function log() {
  console.log("Hi from doc");
}

document.addEventListener("click", function log() {
  console.log("Hi from doc");
});

// run a function after X ms 
setTimeout(function clearEvent() {
  document.removeEventListener("click", function log() {
    console.log("Hi from doc");
  });
}, 3 * 1000); // remove a function after 3 seconds

setInterval(log, 3 * 1000); // set loop times
