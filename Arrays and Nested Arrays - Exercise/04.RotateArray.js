function rotateArray (arr, rotations){
for (let currRotatition = 0; currRotatition < rotations; currRotatition++) {
    let rotatedElement= arr[arr.length-1];
    arr.pop()
    arr.unshift(rotatedElement)
}
console.log(arr.join(` `));
}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);
console.log(`------`);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);