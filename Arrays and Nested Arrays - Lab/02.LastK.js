function lastKnumSequence(n, k) {
    let sequence = [1];
    let summ = 1;
    for (let curr = 1; curr < n; curr++) {
        let start = Math.max(0, curr - k);
        let end = curr - 1;
      let sum=1;
        for (let j = start; j < end; j++) {
        summ+=sequence[j];
        
       }
       sequence.push(summ);

    }
    return sequence;
}
lastKnumSequence(6, 3);
lastKnumSequence(8, 2);