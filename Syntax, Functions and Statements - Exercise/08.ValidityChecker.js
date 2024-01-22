function validityChecker(x1, y1, x2, y2) {

    function isValidDistance(x1, y1, x2, y2) {
        const distance = calculateDistance(x1, y1, x2, y2);
        return Number.isInteger(distance);
    }

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    
    let originToP1 = isValidDistance(x1, y1, 0, 0);
    let originToP2 = isValidDistance(x2, y2, 0, 0);
    let p1ToP2 = isValidDistance(x1, y1, x2, y2);

    if (originToP1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (originToP2) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (p1ToP2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(3, 0, 0, 4);
console.log(`-------`);
validityChecker(2, 1, 1, 1);