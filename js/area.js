
const square = (side) => {
    const calculation = side * side;
    return calculation;
};

const triangle = (base, height) => {
    const calculation = 1/2 * base * height;
    return calculation;
};

const rectangle = (length, width) => {
    const calculation = length * width;
    return calculation;
};

const trapezium = (lengthA, lengthB, height) => {
    const calculation = 2 * (lengthA + lengthB) * height;
    return calculation;
};

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
