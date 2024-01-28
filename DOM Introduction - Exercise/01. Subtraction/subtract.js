function subtract() {
const firstNumRef=document.getElementById(`firstNumber`);
const secondNumRef=document.getElementById(`secondNumber`);
let resultRef= document.getElementById(`result`);

let firstNum= Number(firstNumRef.value);
let secondNum=Number(secondNumRef.value);

let result=firstNum-secondNum;
resultRef.textContent=result;
}