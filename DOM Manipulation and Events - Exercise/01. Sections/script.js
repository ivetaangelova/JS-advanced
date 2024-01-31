function create(words) {
   const contentElement = document.getElementById('content');

   for (let str of words) {

      const divElement = document.createElement('div');
      const paragraphElement = document.createElement('p');

      paragraphElement.textContent = str;
      paragraphElement.style.display = 'none';

      divElement.addEventListener('click', function () {

         paragraphElement.style.display = (paragraphElement.style.display === 'none') ? 'block' : 'none';

      })
      divElement.appendChild(paragraphElement);
      contentElement.appendChild(divElement)

   }
}