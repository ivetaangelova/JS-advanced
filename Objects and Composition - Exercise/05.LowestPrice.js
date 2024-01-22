function lowestPrice (arr){
    let listOfProducts={};
    arr.forEach(entry=>{
        let [town, product, price]=entry.split(` | `);
        price=Number(price);

        if(!(product in listOfProducts)|| price< listOfProducts[product].price){
            listOfProducts[product]={price: price, town}
        }
    })
    for (const product in listOfProducts) {

        const { price, town } = listOfProducts[product];
        console.log(`${product} -> ${price} (${town})`);
      }
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);