// Wrapper function for async functions to help avoid nested try-catch statements
// Borrowed from: https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
// Utility function receives a promise, then resolves the success response to an array with
// the return data as the second item. The error received from the catch is the first array item.

const to = (promise: Promise<void>) => {
    return promise.then(data => {
        return [null, data];
    })
    .catch(err => [err]);
};

export default to;