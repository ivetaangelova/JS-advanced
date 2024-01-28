function focused() {
    const divsReff = document.querySelectorAll('div div');
    const gradient = document.querySelectorAll('div div [type="text"]');

    let gradientArr = Array.from(gradient)
    for (const input of gradientArr) {
        input.addEventListener('focus', highlightActiveDiv);
        input.addEventListener('blur', removeFocus);
    }
    function highlightActiveDiv(event) {

        const focusedInput = event.target;

        const parentDiv = focusedInput.parentElement;
        if (parentDiv) {
            parentDiv.classList.add('focused');
        }

    }
    function removeFocus(event) {
        let arrayDivs = Array.from(divsReff);
        for (let div of arrayDivs) {
            div.classList.remove('focused')

        }

    }
}