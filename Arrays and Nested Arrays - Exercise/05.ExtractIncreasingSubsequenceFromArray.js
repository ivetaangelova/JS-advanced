function extractIncreasingSubsequenceFromArray(arr) {
    return arr.reduce((result, currentNumber) => {
        if (currentNumber >= result[result.length - 1] || result.length === 0) {
            result.push(currentNumber);
        }
        return result;
    }, [])
}
extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
console.log(`------`);
extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]
);
console.log(`------`);
extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]
);