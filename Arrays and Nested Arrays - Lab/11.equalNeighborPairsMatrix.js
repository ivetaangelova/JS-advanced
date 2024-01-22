function equalNeighborPairsMatrix(matrix) {
    let equalPairsCount = 0;


    function areNeighborsEqual(row1, col1, row2, col2) {
        return matrix[row1][col1] === matrix[row2][col2];
    }


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            if (col < matrix[row].length - 1 && areNeighborsEqual(row, col, row, col + 1)) {
                equalPairsCount++;
            }


            if (row < matrix.length - 1 && areNeighborsEqual(row, col, row + 1, col)) {
                equalPairsCount++;
            }
        }
    }

    return equalPairsCount;
}

