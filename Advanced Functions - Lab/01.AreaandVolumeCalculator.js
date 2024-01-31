function solve(area, vol, input) {

    let figures = JSON.parse(input);

    let results = figures.map(figure => {
        let figureArea = area.call(figure);
        let figureVolume = vol.call(figure);
        return { area: figureArea, volume: figureVolume };
    });

   return results;
}
const input = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function area() {
    return Math.abs(this.x * this.y);
};
let result= solve(area, vol, input);
console.log(result);
