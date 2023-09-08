const promiseVideo = new Promise((resolve, reject) => {
    resolve("Video 1 done!");
  });
  const ajaxVideo = new Promise((resolve, reject) => {
    resolve("Video 2 done!");
  });

  const routingVideo = new Promise((resolve, reject) => {
    resolve("Video 3 done!");
  });

  Promise.all([promiseVideo, ajaxVideo, routingVideo]).then((messages) =>
  console.log(messages)
);
  Promise.race([promiseVideo, ajaxVideo, routingVideo]).then((messages) =>
    console.log(messages)
  );