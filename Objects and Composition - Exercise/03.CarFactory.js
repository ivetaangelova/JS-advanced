function carFactory(car) {
    function engine(power) {
        smallEngine = { power: 90, volume: 1800 };
        normalEngine = { power: 120, volume: 2400 };
        monsterEngine = { power: 200, volume: 3500 };
        if (power <= 90) {
            return smallEngine;
        } else if (power <= 120) {
            return normalEngine;
        } else {
            return monsterEngine
        }
    }
    function rightWheelSize(wheelsize) {
        if (wheelsize % 2 == 0) {
            wheelsize = Math.floor(wheelsize / 2) * 2 - 1;
        }
        let result = new Array(4).fill(wheelsize)
        return result;
    }
    let engineInfo = engine(car.power)
    let wheelsize = rightWheelSize(car.wheelsize)
    
    let result = {
        model: car.model,
        engine: engineInfo,
        carriage: {
            type: car.carriage,
            color: car.color
        },
        wheels: wheelsize
    }

    return result;
}
let car1 = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

let car2 = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
};


console.log(carFactory(car1));
console.log(carFactory(car2));
