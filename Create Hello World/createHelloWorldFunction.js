/**
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/
var createHelloWorld = function() {
    
    return function(...args) {
        console.log('Hello world!');
        return "Hello World"
    }
};


 const f = createHelloWorld();
 f(); // "Hello World"
 