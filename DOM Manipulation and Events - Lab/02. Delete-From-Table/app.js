function deleteByEmail() {

const inputReff=document.querySelector('[name="email"]');

let tableRows=Array.from(document.querySelectorAll('#customers tbody tr'));

let result="Not found.";

for(let row of tableRows){
    if(row.children[1].textContent==inputReff.value){
        row.remove();
        result="Deleted.";
        inputReff.value='';
    }
}
const output = document.getElementById('result');
output.textContent=result;

}