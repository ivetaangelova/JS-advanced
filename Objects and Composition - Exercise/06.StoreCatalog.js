function storeCatalog(arr) {
    let storrage = {};
    arr.forEach(element => {
        let [product, price] = element.split(` : `);
        let currPrice = Number(price);
        storrage[product] = currPrice;
    });

    let sortedKeys = Object.keys(storrage).sort((a, b) => a.localeCompare(b));
    let firstLetter = "";
    for (let i = 0; i < sortedKeys.length; i++) {
        const key = sortedKeys[i];
        let currFirstLetter = key[0];
        if (firstLetter != currFirstLetter) {
            firstLetter = currFirstLetter;
            console.log(firstLetter);
        }
        console.log(`  ${key}: ${storrage[key]}`);



    }
}
storeCatalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);