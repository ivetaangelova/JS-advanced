function toggle() {

    let buttonReff = document.querySelector(`.button`);
    let buttonTextContent = buttonReff.textContent
    let extraContent = document.getElementById("extra");

    if (buttonTextContent == "More") {
        buttonReff.textContent = "Less";
        extraContent.style.display = "block";
    } else if (buttonTextContent == "Less") {
        buttonReff.textContent = "More"
        extraContent.style.display = "none"
    }
}