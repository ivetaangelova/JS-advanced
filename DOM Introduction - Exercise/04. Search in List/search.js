function search() {
   const resultOutputReff = document.getElementById("result");
   const input = document.getElementById("searchText")
   let listItems = document.querySelectorAll('#towns li');

   let matchesCounter = 0;
  

    for (let town of listItems) {

        if (town.textContent.toLowerCase().match(input.value.toLowerCase())&& input.value!=='') {
            matchesCounter++;

            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
        } else {

            town.style.fontWeight = 'normal';
            town.style.textDecoration = 'none';
        }
    }

    resultOutputReff.textContent = `${matchesCounter} matches found`;
   }
