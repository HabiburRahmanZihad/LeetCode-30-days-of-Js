//****Compact Object ****/

/**
 * Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj.reduce((acc, item) => {
            const compactItem = compactObject(item);
            if (compactItem) acc.push(compactItem);
            return acc;
        }, []);
    } else if (typeof obj === "object" && obj !== null) {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            const compactValue = compactObject(value);
            if (compactValue) acc[key] = compactValue;
            return acc;
        }, {});
    }
    return obj;
}


//time complexity: O(n)
//space complexity: O(n)