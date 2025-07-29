//****Is Object Empty ****/

/**
 * Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
 */

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    }
    return false; // For non-object and non-array types, we consider them not empty.
}

// Time complexity: O(n) where n is the number of keys in the object or elements in the array, as we check their lengths.
// Space complexity: O(1) since we are not using any additional data structures that grow