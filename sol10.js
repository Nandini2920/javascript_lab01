
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const squaredNumbers = numbers.map(function(num) {
    return num * num;
});

console.log("Original array:", numbers);
console.log("Squared array:", squaredNumbers);
