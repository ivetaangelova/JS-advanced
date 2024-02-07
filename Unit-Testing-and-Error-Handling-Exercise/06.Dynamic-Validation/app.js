function validate() {
    let emailInput = document.getElementById("email");

    emailInput.addEventListener("change", onChange)
    function onChange(e) {
        let pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/g
        let text = e.target.value
        if (pattern.test(text)) {

            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")

        }
    }
}
// Write a JS function that dynamically validates an email input field when
//  it is changed. If the input is invalid, apply to it the class "error".
//   Do not validate on every keystroke, as it is annoying for the user,
// consider only change events.
// A valid email will be in format: <name>@<domain>.<extension>
// Only lowercase Latin characters are allowed for any of the parts of
// the email. If the input is valid, clear the style.
