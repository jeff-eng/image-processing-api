"use strict";
// Wrapper function for async functions to help avoid nested try-catch statements
// Borrowed from: https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
// Utility function receives a promise, then resolves the success response to an array with
// the return data as the second item. The error received from the catch is the first array item.
Object.defineProperty(exports, "__esModule", { value: true });
var to = function (promise) {
    return promise.then(function (data) {
        return [null, data];
    })
        .catch(function (err) { return [err]; });
};
exports.default = to;
