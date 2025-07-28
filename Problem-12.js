//****Add Two Promises ****/

/**
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([result1, result2]) => {
        return result1 + result2;
    });
}
//time complexity: O(1) for the Promise.all resolution
//space complexity: O(1) for the result storage, assuming the numbers are small enough