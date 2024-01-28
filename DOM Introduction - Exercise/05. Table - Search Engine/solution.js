function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchFieldReff = document.getElementById("searchField");
   const tableRows = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {

      let textSearch = searchFieldReff.value;

      for (let row of tableRows) {

         let containsSearchTerm = false;
         let tableData = Array.from(row.querySelectorAll(`td`))

         for (let data of tableData) {
            if (data.textContent.includes(textSearch)) {
               containsSearchTerm = true;
               break;
            }
         }
         if (containsSearchTerm) {
            row.classList.add(`select`)
         } else {
            row.classList.remove(`select`)
         }
      }

      searchFieldReff.value = '';
   }
}