function townPopulation(array) {
    let registry = {};
    for (let cityInfo = 0; cityInfo < array.length; cityInfo++) {
        const [city, population] = array[cityInfo].split(` <-> `);
        if (registry.hasOwnProperty(city)) {
            registry[city] += Number(population);
        } else {
            registry[city] = Number(population);
        }
    }
    for (let [cityName, population] of Object.entries(registry)) {
        console.log(`${cityName} : ${population}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
console.log(`-----`);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);