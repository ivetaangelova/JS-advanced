function sortingNums (numbers){
    const sortedArray = numbers.sort((a, b) => a - b);

    const result = [];
    let leftPointer = 0;
    let rightPointer = sortedArray.length - 1;

    while (leftPointer <= rightPointer) {
        result.push(sortedArray[leftPointer]);
        if (leftPointer !== rightPointer) {
            result.push(sortedArray[rightPointer]);
        }
        leftPointer++;
        rightPointer--;
    }

    console.log(result);
}
sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 4]);
console.log(`-----`);
sortingNums([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);