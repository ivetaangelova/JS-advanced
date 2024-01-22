function addAndRemoveElements(arr) {
    let result = [];
    let currNum = 1;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        switch (command) {
            case 'add':
                result.push(currNum);
                break;

            case "remove":
                result.pop();
                break;
        }
        currNum++;
    }
    if (result.length < 1) {
        console.log("Empty");

    } else {
        console.log(result.join(`\n`));
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']
);
console.log(`----------`);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);
console.log(`---------`);
addAndRemoveElements(['remove',
    'remove',
    'remove']
);