function solve() {
  const textareaBoxesReff = document.querySelectorAll('#exercise textarea');

  document.querySelector('[type="checkbox"]').removeAttribute('disabled')

  const inputTextReff = textareaBoxesReff[0];
  const outputTextReff = textareaBoxesReff[1];

  const buttonsReff = document.querySelectorAll('#exercise button');

  const butnGenerateReff = buttonsReff[0];
  const butnBuyReff = buttonsReff[1];

  const tableReff=document.querySelector('.table');
  butnGenerateReff.addEventListener("click",createTbodyFromJSONArray);
  butnBuyReff.addEventListener('click', buyFurniture);



  function createTbodyFromJSONArray () {
    const textAsJSON=inputTextReff.value
    const inputText=JSON.parse(textAsJSON);

    if (inputText.length == 0) {
      return;
    }
    for (let obj of inputText) {
      const tbodyElement = document.createElement('tbody');

      const trElement = document.createElement('tr');

      const imageTdElement = document.createElement('td')
      const img = document.createElement('img');
      img.src = obj.img;

      const nameTdElement = document.createElement('td');
      nameTdElement.textContent = obj.name;

      const priceTdElement = document.createElement('td');
      priceTdElement.textContent = obj.price;

      const decFactorTdElement = document.createElement('td')
      decFactorTdElement.textContent = obj.decFactor;

      const checkboxTdElement = document.createElement('td')
      const checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';
      checkboxElement.disabled = false;
      checkboxTdElement.appendChild(checkboxElement);

      imageTdElement.appendChild(img);
      trElement.appendChild(imageTdElement);
      trElement.appendChild(nameTdElement);
      trElement.appendChild(priceTdElement);
      trElement.appendChild(decFactorTdElement);
      trElement.appendChild(checkboxTdElement);
      tbodyElement.appendChild(trElement);
      tableReff.appendChild(tbodyElement);

    }
  // When the ["Generate"] button is clicked, add a new row to the table for each piece
  //  of furniture with image, name, price, and decoration factor (code example below). 
  //create tbody
  //create tr

  // for each element create td;
  /* <td>
<img
    src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
</td>
<td>
<p>Office chair</p>
</td>
<td>
<p>160</p>
</td>
<td>
<p>0.5</p>
</td>
<td>
<input type="checkbox" disabled />
</td> */



  // When the ["Buy"] button is clicked, get all checkboxes that are
  //  marked and show in the result textbox the names of the piece of
  //   furniture that were checked, separated by a comma and single
  //    space (", ") in the following format: "Bought furniture: {furniture1}, {furniture2}…".
  // On the next line, print the total price in the format: "Total
  //  price: {totalPrice}" (formatted to the second decimal point).
  //   Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"

}
function buyFurniture() {
  const checkboxes = document.querySelectorAll('.table tbody input[type="checkbox"]:checked');
  const boughtFurniture = Array.from(checkboxes).map(checkbox => {
    let parent = checkbox.parentNode;
    while (parent && parent.tagName !== 'TR') {
      parent = parent.parentNode;
    }
    const name = parent.querySelector('td:nth-child(2)').textContent;
    return name.trim();
  });

  const totalPrice = Array.from(checkboxes).reduce((sum, checkbox) => {
    let parent = checkbox.parentNode;
    while (parent && parent.tagName !== 'TR') {
      parent = parent.parentNode;
    }
    const price = parseFloat(parent.querySelector('td:nth-child(3)').textContent);
    return sum + price;
  }, 0);

  const totalDecFactor = Array.from(checkboxes).reduce((sum, checkbox) => {
    let parent = checkbox.parentNode;
    while (parent && parent.tagName !== 'TR') {
      parent = parent.parentNode;
    }
    const decFactor = parseFloat(parent.querySelector('td:nth-child(4)').textContent);
    return sum + decFactor;
  }, 0);

  const averageDecFactor = totalDecFactor / checkboxes.length || 0;
let strFurniture=boughtFurniture.join(', ')
  outputTextReff.value =  `Bought furniture: ${strFurniture}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`;
}

}