//****Filter Elements from Array ****/

/**
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
 */


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function filter(arr, fn) {
    // Initialize an empty array to hold the filtered elements
    const result = [];

    // Iterate over each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Check if the filtering function returns a truthy value
        if (fn(arr[i], i)) {
            // If it does, push the current element into the result array
            result.push(arr[i]);
        }
    }

    // Return the new array with filtered elements
    return result;
}

// Time Complexity	O(n)
// Space Complexity	O(n)