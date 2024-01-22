function rocessOddPosition(arr) {
    
    const result = arr
        .filter((_, index) => index % 2 !== 0)
        .map(element => element * 2)
        .reverse();

    console.log(result.join(' '));
}


rocessOddPosition()
