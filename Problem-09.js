//****Return Length of Arguments Passed ****/

/**
 * Write a function argumentsLength that returns the count of arguments passed to it.
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

const argumentsLength = function (...args) {
    let count = 0;

    for (let i = 0; i < args.length; i++) {
        count++;
    }

    return count;
}

// time complexity: O(n)
// space complexity: O(1)