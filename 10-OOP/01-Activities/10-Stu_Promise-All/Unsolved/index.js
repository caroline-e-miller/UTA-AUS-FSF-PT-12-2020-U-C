const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    const time = apiCallDurations;
    if (time > maxDuration) {
      reject(new Error('Too slow!'))
    } else {
      setTimeout(() => {
        resolve('Good timing!')
        // TODO: If the duration is longer than maxDuration, reject() the promise
        // TODO: Otherwise resolve() the promise
      }, duration);
    }
  });

const promises = [];

apiCallDurations.map((duration) => promises.push(callAPI(duration)));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all(apiCallDurations)
  .then((values) => {
    console.log('\nWe got the promise stuff to work maybe!');
    console.log(values);
  })
  .catch((err) => new Error(err));