//**** Apply Transform Over Each Element in Array ****/

/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 */


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


function map(arr, fn) {
    // Initialize an empty array to hold the transformed elements
    const result = [];

    // Iterate over each element in the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the mapping function to the current element and its index
        // and push the result into the result array
        result.push(fn(arr[i], i));
    }

    // Return the new array with transformed elements
    return result;
}


// Time Complexity	O(n)
// Space Complexity	O(n)