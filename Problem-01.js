// Write a function createHelloWorld. It should return a new function that always returns "Hello World".


const createHelloWorld = function () {
    return function (...args) {
        console.log(args);
        return "Hello World"
    }
};

// console.log(createHelloWorld()()); // "Hello World"