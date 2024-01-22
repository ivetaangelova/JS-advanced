function rectangle (width, height, color){
    // let firstLetter=color[0].toUpperCase();
    // let part = color.substring(1);
    // color=firstLetter+part;
    function capitalizeFirstLetter(inputString) {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }
    color=capitalizeFirstLetter(color);

return{
    width,
    height,
    color,
    calcArea(){
        return this.width*this.height
    }
}
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
