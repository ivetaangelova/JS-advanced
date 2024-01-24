function colorize() {
    // let array= Array.from(document.getElementsByTagName('tr'));
    // for (let row = 1; row < array.length; row+=2) {
    //     const element = array[row];
    //     element.style.background='teal'
        
    // }
const rows=document.querySelectorAll(`tr:nth-child(even)`);
for(let row of rows){
    row.style.background=`teal`;
}
}