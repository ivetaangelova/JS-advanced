function heroicInventory(arrOfHeroes) {
    let listOfHeroes = [];
    for (let heroInfo of arrOfHeroes) {
        let [name, level, items] = heroInfo.split(` / `);
        level = Number(level);
        items = items ? items.split(`, `) : [];

        listOfHeroes.push({ name, level, items });
    }
    console.log(JSON.stringify(listOfHeroes));

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])