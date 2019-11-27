const sumOf = (...numberArray) => {
let sum = 0;

for(let number of numberArray){
    sum += number;
}

return sum;
};
