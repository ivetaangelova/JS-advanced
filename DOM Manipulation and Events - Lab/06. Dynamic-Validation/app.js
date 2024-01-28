function validate() {

     const emailInput = document.getElementById('email');


     emailInput.addEventListener('change', function () {

         const emailValue = emailInput.value.trim();
 

         const emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
 

         if (emailPattern.test(emailValue)) {

             emailInput.classList.remove('error');
         } else {

             emailInput.classList.add('error');
         }
     });
    }