//****Counter ****//

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).



const createCounter = function (n) {
    // The counter function will maintain its own state using a closure
    return function () {
        // Increment n each time the function is called
        // and return the updated value
        return n++;
    };
};