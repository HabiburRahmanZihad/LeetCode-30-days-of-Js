//****Execute Asynchronous Functions in Parallel ****/

/**
 * Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
 */

var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        functions.forEach((func, index) => {
            func().then((result) => {
                results[index] = result;
                completed++;
                if (completed === functions.length) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    });
};


// Time complexity: O(n) where n is the number of functions in the array, as we iterate through each function once.
// Space complexity: O(n) for storing the results of the promises in the results array.