function validate(){
    const submitButton = document.getElementById('submit');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const companyCheckbox = document.getElementById('company');
    const companyNumberInput = document.getElementById('companyNumber');
    const companyInfoFieldset = document.getElementById('companyInfo');
    const validDiv = document.getElementById('valid');

    submitButton.addEventListener('click', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Reset styles
        resetStyles();

        // Validate fields
        const isUsernameValid = validateField(usernameInput, /^[a-zA-Z0-9]{3,20}$/);
        const isEmailValid = validateField(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        const isPasswordValid = validateField(passwordInput, /^\w{5,15}$/);
        const isConfirmPasswordValid = validateConfirmPassword(passwordInput, confirmPasswordInput);
        const isCompanyValid = validateCompany(companyCheckbox, companyNumberInput);

        // Show or hide valid div
        if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isCompanyValid) {
            validDiv.style.display = 'block';
            // Submit the form if all fields are valid
            document.getElementById('registerForm').submit();
        } else {
            validDiv.style.display = 'none';
        }
    });

    // Event listener for the "Is company?" checkbox
    companyCheckbox.addEventListener('change', function() {
        if (this.checked) {
            companyInfoFieldset.style.display = 'block';
        } else {
            companyInfoFieldset.style.display = 'none';
        }
    });

    function validateField(input, regex) {
        const value = input.value.trim();
        if (!value) {
            applyErrorStyle(input);
            return false;
        }
        if (!regex.test(value)) {
            applyErrorStyle(input);
            return false;
        }
        return true;
    }

    function validateConfirmPassword(passwordInput, confirmPasswordInput) {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        if (password !== confirmPassword) {
            applyErrorStyle(confirmPasswordInput);
            return false;
        }
        return true;
    }

    function validateCompany(companyCheckbox, companyNumberInput) {
        if (companyCheckbox.checked) {
            const companyNumber = companyNumberInput.value.trim();
            if (!companyNumber || isNaN(companyNumber) || companyNumber < 1000 || companyNumber > 9999) {
                applyErrorStyle(companyNumberInput);
                return false;
            }
        }
        return true;
    }

    function applyErrorStyle(element) {
        element.style.borderColor = 'red';
    }

    function resetStyles() {
        const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="number"]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.borderColor = 'initial';
        }
    }
};
