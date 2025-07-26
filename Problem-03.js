//**** To Be Or Not To Be ****//


/**
 * Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
 *
 *  toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
 *  notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 */



function expect(val) {
    return {
        // Function to check if the value is equal to the expected value
        // If they are equal, it returns true; otherwise, it throws an error
        toBe: function (value) {
            if (val === value) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        // Function to check if the value is not equal to the expected value
        // If they are not equal, it returns true; otherwise, it throws an error
        notToBe: function (value) {
            if (val !== value) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}