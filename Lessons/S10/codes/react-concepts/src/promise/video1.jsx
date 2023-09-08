const studentWatched = false;
const studentRead = false;

// function checkIfStudentWatched(callback, errorCallback) {
//   if (!studentWatched) {
//     errorCallback("Did not watched! :(");
//   } else if (!studentRead) {
//     errorCallback("Did not read! :(");
//   } else {
//     callback("I love this student!");
//   }
// }

// checkIfStudentWatched(
//   (message) => console.log(message),
//   (message) => console.error(message)
// );

function checkIfStudentWatchedPromise() {
  return new Promise((resolve, reject) => {
    if (!studentWatched) {
      reject("Did not watched! :(");
    } else if (!studentRead) {
      reject("Did not read! :(");
    } else {
      resolve("I love this student!");
    }
  });
}

checkIfStudentWatchedPromise().then(console.log).catch(console.warn);