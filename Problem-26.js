//****Flatten Deeply Nested Array ****/

/**
 * Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.
 */


/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
    let result = [];

    function flattenArray(currentArr, currentDepth) {
        for (let i = 0; i < currentArr.length; i++) {
            if (Array.isArray(currentArr[i]) && currentDepth < n) {
                flattenArray(currentArr[i], currentDepth + 1);
            } else {
                result.push(currentArr[i]);
            }
        }
    }

    flattenArray(arr, 0);
    return result;
};

//Time Complexity: O(n) where n is the total number of elements in the array, as we traverse each element once.
//Space Complexity: O(n) for the result array that stores the flattened elements.