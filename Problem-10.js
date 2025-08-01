//**** Allow One Function Call ****/

/**
 * 
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

 * 
 */

/**
 * @param {Function} fn
 * @return {Function}
 */

const once = function (fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    };
}

// time complexity: O(1)
// space complexity: O(1)