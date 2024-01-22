function sortBy2Criteria(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(arr.join(`\n`));
}
sortBy2Criteria(['alpha',
    'beta',
    'gamma']
);
sortBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);