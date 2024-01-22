function listOfNames (arr){
let sortedNames=arr.sort((a,b)=> a.localeCompare(b))
sortedNames.forEach((name, index) => {
    console.log(`${index + 1}.${name}`);
});
}
listOfNames(["John", "Bob", "Christina", "Ema"]);