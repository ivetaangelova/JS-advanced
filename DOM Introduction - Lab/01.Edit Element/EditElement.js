function editElement(element, match, replace){
    let content = element.textContent;
    element.textContent= content.split(match).join(replace);
}