function findBiggestElement(matrix) {
    let maxElement = matrix[0][0];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > maxElement) {
                maxElement = matrix[row][col];
            }
        }
    }

    return maxElement;
}
findBiggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
)


