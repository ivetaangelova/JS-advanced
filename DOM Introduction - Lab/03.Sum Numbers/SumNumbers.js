function calc() {
    // TODO: sum = num1 + num2
    const num1=document.getElementById("num1");
    const num2=document.getElementById("num2");

    let result=Number(num1.value) + Number(num2.value);

    let resultarea=document.getElementById("sum");
    resultarea.value=result;

}
