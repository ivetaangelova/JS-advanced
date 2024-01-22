function townsToJSON(input) {
    // Extracting column names from the first string
    const [townHeader, latitudeHeader, longitudeHeader] = input[0].split('|').map(col => col.trim());

    // Initialize an array to store the JSON objects
    const towns = [];

    // Iterate through the rows starting from index 1 (excluding the header)
    for (let i = 1; i < input.length; i++) {
        // Extracting values from the current row
        const [town, latitude, longitude] = input[i].split('|').map(val => val.trim());

        // Creating an object and adding it to the array
        towns.push({
            [townHeader]: town,
            [latitudeHeader]: Number(latitude).toFixed(2),
            [longitudeHeader]: Number(longitude).toFixed(2)
        });
    }

    // Output the JSON array
    console.log(JSON.stringify(towns));
}

// Example usage:
const input = [
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
];

townsToJSON(input);
