function cookingByNumber (points,command1,command2,command3,command4,command5){

    let commands=[command1,command2,command3,command4,command5];
for (let i = 0; i < commands.length; i++) {
    const element = commands[i];
    switch (element) {
        case `chop`:
            points/=2;
            console.log(points);
            break;
            case `dice`:
            points=Math.sqrt(points);
            console.log(points);
            break;
            case `spice`:
            points+=1;
            console.log(points);
            break;
            case `bake`:
            points*=3;
            console.log(points);
            break;
    
        case `fillet`:
            points-= (points*0.2);
            console.log(points);
            break;
    }
    
}
}
cookingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log(`-----------`);
cookingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');