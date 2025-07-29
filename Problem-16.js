//****Promise Time Limit ****//

/**
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

function timeLimit(fn, t) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    clearTimeout(timer);
                    resolve(result);
                })
                .catch((error) => {
                    clearTimeout(timer);
                    reject(error);
                });
        });
    };
}

// Time Complexity: O(1) - The time complexity is constant because we are only setting a timer and calling the function.
// Space Complexity: O(1) - The space complexity is also constant as we are not using any additional data structures that grow with input size.