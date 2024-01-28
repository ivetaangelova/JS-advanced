function solve() {
  const resultRef = document.getElementById("result");
  let inputConvention = document.getElementById("naming-convention").value;
  let inputText = document.getElementById("text").value;

  let result = "";

  let textAsArray = inputText.split(' ');

  switch (inputConvention) {
    case "Camel Case":
      result+=textAsArray.shift().toLowerCase();
      textAsArray.forEach(word => {
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
        result += word;
      });
      break;
    case "Pascal Case" :
      textAsArray.forEach(word => {
        word = word[0].toUpperCase() + word.substring(1).toLowerCase();
        result += word;
      });
      break;

    default:
      result="Error!";
      break;
  }
  resultRef.textContent=result;
}