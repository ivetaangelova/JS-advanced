function PrintEveryNthElementFromAnArray(arr, step) {
    let result = [];
    for (let i = 0; i < arr.length; i += step) {
        const element = arr[i];
        result.push(element);

    }
    return result;
}
PrintEveryNthElementFromAnArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6
)
console.log(`------`);
PrintEveryNthElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2
)
console.log(`------`);
PrintEveryNthElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)