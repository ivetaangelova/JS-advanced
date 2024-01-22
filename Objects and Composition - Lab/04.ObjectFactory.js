function objectFactory(library, orders) {
    // Helper function to create a deep copy of an object
    function deepCopy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // Helper function to apply parts to a template
    function applyParts(template, parts) {
        const result = deepCopy(template);
console.log(result);
        parts.forEach(part => {
            if (library.hasOwnProperty(part)) {
                result[part] = library[part];
            }
        });

        return result;
    }

    // Fulfill orders
    const fulfilledOrders = orders.map(order => {
        const templateCopy = deepCopy(order.template);
        return applyParts(templateCopy, order.parts);
    });

    return fulfilledOrders;
}
const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = objectFactory(library, orders);
  console.log(products);
  