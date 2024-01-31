function addItem() {

    const textInputReff = document.getElementById('newItemText');
    const valueInputReff = document.getElementById('newItemValue');
    const selectMenuReff = document.getElementById('menu');


    const newItemTextValue = textInputReff.value;
    const newItemValueValue = valueInputReff.value;


    const newOption = document.createElement('option');

    newOption.textContent = newItemTextValue;
    newOption.value = newItemValueValue;


    selectMenuReff.appendChild(newOption);

    textInputReff.value = '';
    valueInputReff.value = '';
}