function solve() {
  // take the input from id "input"
  const inputText = document.getElementById('input').value;
  const text = inputText.split('.');
  const nonEmptySentences = text.filter(sentance => sentance.length > 0);

  let paragraphs = '';
  let currentParagraph = ''

  for (let i = 0; i < nonEmptySentences.length; i++) {
    let sentance=nonEmptySentences[i];
    currentParagraph+=sentance;

    if (i === nonEmptySentences.length - 1 || (i + 1) % 3 === 0) {
      const paragraph = `<p>${currentParagraph}</p>`;
      paragraphs+=paragraph;


      currentParagraph='';
    }
  }

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = paragraphs;
}