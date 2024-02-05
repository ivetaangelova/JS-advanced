function sum(arr, start, end) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end >= arr.length) {
        end = arr.length - 1;
    }

    for (let i = start; i <= end; i++) {
        let current = Number(arr[i]);
        sum += current;
    }

    return sum;
}

console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(2)) //3.3
