function addItem() {
    const inputReff = document.getElementById('newItemText');
    let inputText = inputReff.value;
    if (inputText.length <= 0) {
        return
    }
    const listReff = document.getElementById('items');

    const newLiElement = document.createElement(`li`);
    newLiElement.textContent = inputText;

    //Add-Delete
    const deleteBtn = document.createElement(`a`);
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete);
    newLiElement.appendChild(deleteBtn)

    //Add end-Delete
    listReff.appendChild(newLiElement);
    inputReff.value = '';
    function onDelete(event) {
        const deleteBtn = event.target;
        const liElement = deleteBtn.parentElement;
        liElement.remove()
    }
}