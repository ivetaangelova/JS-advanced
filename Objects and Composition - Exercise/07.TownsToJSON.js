function townToJSON (arr){
let listofTowns=[];
let [town, latitude, longitude]=arr[0].split(`|`).map(value=>value.trim()).filter(Boolean);
for (let i = 1; i < arr.length; i++) {
    let [townName, townLatitude, townLongtitude] = arr[i].split(`|`).map(value=>value.trim()).filter(Boolean);
    townLatitude=Number(townLatitude).toFixed(2)
    townLongtitude=Number(townLongtitude).toFixed(2)
    listofTowns.push({
        [town]: townName,
        [latitude]: Number(townLatitude),
        [longitude]:Number(townLongtitude)
    })
    
}
console.log(JSON.stringify(listofTowns))

}
townToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)