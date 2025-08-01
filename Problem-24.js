//****Sort By ****/

/**
 * Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.
 */
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

function sortBy(arr, fn) {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
}

//Time Complexity: O(n log n) due to the sorting operation.
//Space Complexity: O(n) for the slice operation which creates a new array.