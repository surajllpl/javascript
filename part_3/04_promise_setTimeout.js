// promise and setTimeout
// I want to resolve/ reject promise after 2 second

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resolve(value);
      } else {
        reject(value);
      }
    }, 2000);
  });
}

myPromise()
    .then((value) => console.log(value))
    .catch((error) => console.log(error))