function addItem() {
  const inputReff=document.getElementById('newItemText');
  let inputText=inputReff.value;
if(inputText.length<=0){
    return
}
  const listReff=document.getElementById('items');

  const newLiElement=document.createElement(`li`);
  newLiElement.textContent=inputText;

  listReff.appendChild(newLiElement);
  inputReff.value='';
}