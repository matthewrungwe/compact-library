// Function to calculate the difference between two number.

// wrapFunction returns a function.
const wrapFunction = () => {
    return (a, b) => {
        return a - b;
    };
};

// Calling wrapFunction returns a function definition.
// The fuction returned by wrapFunction has two parameter
// To use differenceOf, call it with two arguments to return the difference between them
const differenceOf = wrapFunction();
