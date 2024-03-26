function printTableOfThree() {
    for (let i = 1; i <= 10; i++) {
        let result = "";
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            sum += 3;
            result += "3";
            if (j < i) {
                result += "+";
            }
        }
        console.log(`3*${i}=${result}=${sum}`);
    }
}

printTableOfThree();

