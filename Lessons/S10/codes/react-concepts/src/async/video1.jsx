function makeRequest(location) {
    return new Promise((resolve, reject) => {
      console.log("waiting...");
      if (location === "Iran") {
        resolve("connection was successful!");
      } else {
        reject("access denied");
      }
    });
  }

  function processRequest(response) {
    return new Promise((resolve, reject) => {
      console.log("waiting for processs");
      resolve("Info " + response);
    });
  }

  // makeRequest("Iran")
  //   .then((response) => {
  //     console.log("Log response 1: ", response);
  //     return processRequest(response);
  //   })
  //   .then((response) => {
  //     console.log("Finished! " + response);
  //   })
  //   .catch((err) => console.warn(err));

  async function doWork() {
    try {
      const response = await makeRequest("America");
      console.log("response received! " + response);
      const response2 = await processRequest(response);
      console.log(response2);
    } catch (err) {
      console.log(err);
    }
  }

  doWork();