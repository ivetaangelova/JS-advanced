function solve() {
   // Get the necessary DOM elements
   const addButtons = document.querySelectorAll('.add-product');
   const checkoutButton = document.querySelector('.checkout');
   const textarea = document.querySelector('textarea');

   // Store the added products and total price
   const addedProducts = new Set();
   let totalPrice = 0;
   let checkoutClicked = false; // Flag to track checkout button click

   // Function to update the textarea with the added products
   function updateTextarea(productName, productPrice) {
       const formattedPrice = productPrice.toFixed(2);
       textarea.value += 'Added ' + productName + ' for ' + formattedPrice + ' to the cart.\n';
   }

   // Function to handle the "Add" button click
   function handleAddButtonClick(event) {
       if (checkoutClicked) {
           return; // Don't allow adding products after checkout
       }

       const productContainer = event.target.parentElement.parentElement;
       const productName = productContainer.querySelector('.product-title').textContent;
       const productPrice = parseFloat(productContainer.querySelector('.product-line-price').textContent);

       if (!addedProducts.has(productName)) {
           addedProducts.add(productName);
           totalPrice += productPrice;
           updateTextarea(productName, productPrice);
       }
   }

   // Function to handle the "Checkout" button click
   function handleCheckoutButtonClick() {
       if (!checkoutClicked) {
           const uniqueProductsList = Array.from(addedProducts).join(', ');
           const formattedTotalPrice = totalPrice.toFixed(2);

           textarea.value += 'You bought ' + uniqueProductsList + ' for ' + formattedTotalPrice + '.\n';

           // Disable all buttons after checkout
           for (let i = 0; i < addButtons.length; i++) {
               addButtons[i].disabled = true;
           }
           checkoutButton.disabled = true;

           checkoutClicked = true; // Set the flag to true after checkout
       }
   }

   // Add event listeners to "Add" buttons
   for (let i = 0; i < addButtons.length; i++) {
       addButtons[i].addEventListener('click', handleAddButtonClick);
   }

   // Add event listener to "Checkout" button
   checkoutButton.addEventListener('click', handleCheckoutButtonClick);
}

