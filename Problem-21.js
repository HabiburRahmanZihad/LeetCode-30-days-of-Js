//****Chunk Array ****/
/**
 * Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's _.chunk function.
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function (arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};


// Time complexity: O(n) where n is the length of the input array, as we iterate through the array once.
// Space complexity: O(n) for storing the chunked arrays in the result array, where n is the number of elements in the input array.