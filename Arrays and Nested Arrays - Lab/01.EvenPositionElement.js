function evenPositionElement(arr) {
    let solve = ``;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if ((i + 1) % 2 !== 0) {
            solve += `${element} `
        }
    }
    console.log(solve);
}
evenPositionElement([10, 20, 30, 40, 50]);