function roadRadar(speed, area) {
    let difference = 0;

    let allowedSpeed = allowedSpeedCheck(area);
    switch (area) {
        case `motorway`:
            if (speed > allowedSpeed) {
                difference = speed - allowedSpeed;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${statusSpeed(difference)}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
            }

            break;
        case `interstate`:
            if (speed > allowedSpeed) {
                difference = speed - allowedSpeed;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${statusSpeed(difference)}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
            }

            break;
        case `city`:
            if (speed > allowedSpeed) {
                difference = speed - allowedSpeed;
                statusSpeed(difference)
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${statusSpeed(difference)}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
            }
            break;

        default:
            if (speed > allowedSpeed) {
                difference = speed - 20;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${statusSpeed(difference)}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
            }
            break;
    }

    function allowedSpeedCheck(area) {
        switch (area) {
            case `residential`:
                return 20;
                break;
            case `city`:
                return 50;
                break;
            case `interstate`:
                return 90;
                break;

            default:
                return 130;
                break;
        }
    }
    function statusSpeed(speedOver) {
        let status = ``;
        if (speedOver <= 20) {
            return status = `speeding`;
        } else if (speedOver <= 40) {
            return status = `excessive speeding`;
        } else {
            return status = `reckless driving`;
        }
    }
}
roadRadar(40, 'city');
console.log(`--------`);
roadRadar(21, 'residential');
console.log(`--------`);
roadRadar(120, 'interstate');
console.log(`--------`);
roadRadar(200, 'motorway');

