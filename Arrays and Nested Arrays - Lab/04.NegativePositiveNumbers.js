function negativePositiveNumbers (arr){
    let result=[];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element<0){
            result.unshift(element);
        }else{
            result.push(element);
        }
        
    }
    console.log(result.join(`\n`));
}
negativePositiveNumbers([3, -2, 0, -1]);