//**** Join Two Arrays by ID****/

/**
 * Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 */

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

function join(arr1, arr2) {
    const map = new Map();

    // Add all objects from arr1 to the map
    arr1.forEach(item => {
        map.set(item.id, { ...item });
    });

    // Merge objects from arr2 into the map
    arr2.forEach(item => {
        if (map.has(item.id)) {
            // Merge properties, with arr2's properties taking precedence
            map.set(item.id, { ...map.get(item.id), ...item });
        } else {
            // If id doesn't exist in map, add it
            map.set(item.id, { ...item });
        }
    });

    // Convert the map values to an array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

//Time Complexity: O(n log n) for sorting the final array, where n is the number of unique ids.
//Space Complexity: O(n) for storing the merged objects in the map.