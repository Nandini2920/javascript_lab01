function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

function main() {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];
    
    const result = intersection(arr1, arr2);
    console.log("Intersection of the two arrays:", result);
}

main();
