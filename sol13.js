function getUniqueNumbers(arr) {
    return arr.reduce((unique, current) => {
        if (!unique.includes(current)) {
            unique.push(current);
        }
        return unique;
    }, []);
}

function main() {
    const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 7, 1];
    const uniqueNumbers = getUniqueNumbers(numbers);
    console.log("Original Array:", numbers);
    console.log("Array with Unique Numbers:", uniqueNumbers);
}

main();
