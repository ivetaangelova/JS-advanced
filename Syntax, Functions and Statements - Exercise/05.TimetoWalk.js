function timeToWalk(steps, footprintLength, speed) {
    let distanceMeters = steps * footprintLength;
    let restTimeMinutes = Math.floor(distanceMeters / 500);


    let walkingTimeSeconds = Math.round(distanceMeters / (speed * 1000) * 3600) + restTimeMinutes * 60;


    let hours = Math.floor(walkingTimeSeconds / 3600);
    let minutes = Math.floor((walkingTimeSeconds % 3600) / 60);
    let seconds = walkingTimeSeconds % 60;


    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
