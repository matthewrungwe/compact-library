/* 
    Written by
    Matthew Rungwe
*/

// Calculating area of a square function.
const square = (side) => {
    const calculation = side * side;
    return calculation;
};

// Calculating the area of a triangle fuction.
const triangle = (base, height) => {
    const calculation = 1/2 * base * height;
    return calculation;
};

// Calculating the area of a rectangle function.
const rectangle = (length, width) => {
    const calculation = length * width;
    return calculation;
};

// Calculating the area of a trapezium function.
const trapezium = (lengthA, lengthB, height) => {
    const calculation = 2 * (lengthA + lengthB) * height;
    return calculation;
};

// the area function deligates which shape's function gets called.
// area() takes at most 4 arguments when it gets called
// area() needs to have the proper name of the shape you wish to calculate for as a string in the first argument 
const area = (shape, sideA = 0, sideB = 0, sideC = 0) => {
    switch (shape) {
        case 'triangle':
            return triangle(sideA, sideB);
        case 'square':
            return square(sideA);
        case 'rectangle':
            return rectangle(sideA, sideB);
        case 'trapezium':
            return trapezium(sideA, sideB, sideC);
        default:
            console.log('unknown shape entered');
            break;
    }
}; 
