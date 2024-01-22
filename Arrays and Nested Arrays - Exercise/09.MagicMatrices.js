function solve(matrix) {

    let isMagic = true;
    let reffLength = matrix.length


    let reffSum = matrix[0].reduce((acc, num) => acc + num, 0)

    for (let row = 0; row < matrix.length; row++) {

        let sumRow = matrix[row].reduce((acc, num) => acc + num, 0);

        if (reffLength !== matrix[row].length) {
            isMagic = false;
            break;
        }

        let sumColumn = matrix.reduce((acc, currRow) => { acc + currRow[row] }, 0);

        if (reffSum !== sumColumn && reffSum !== sumRow) {
            isMagic = false;
            break;
        }

    }
    console.log(isMagic);
}
solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]


);
console.log(`-----`);
solve([
    [2, 1, 3],
    [1, 3, 2],
    [3, 2, 1]
]);
console.log(`--------`);
solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)