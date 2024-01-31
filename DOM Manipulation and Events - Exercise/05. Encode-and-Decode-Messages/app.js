function encodeAndDecodeMessages() {
    const inputsFields = document.querySelectorAll('#main div textarea');
    const encodeFieldReff = inputsFields[0];
    const decodeFieldReff = inputsFields[1];

    const buttonsReff=document.querySelectorAll('#main div button');
    const encodeButnReff=buttonsReff[0];
    const decodeButnReff=buttonsReff[1];

encodeButnReff.addEventListener("click", encode);
decodeButnReff.addEventListener("click", decode);


    function encode() {
        if(encodeFieldReff.value==""){
            return
        }
        let characters=encodeFieldReff.value.split('');
        const encodedCharacters = characters.map(char => {
   
            const encodedCharCode = char.charCodeAt(0) + 1;
    

            return String.fromCharCode(encodedCharCode);
        });
        encodeFieldReff.value="";
        decodeFieldReff.value=encodedCharacters.join("");
 
    }
    function decode() {
        if (decodeFieldReff.value == "") {
            return;
        }
        let characters = decodeFieldReff.value.split("");
        const decodedCharacters = characters.map(char => {
            const decodedCharCode = char.charCodeAt(0) - 1;
            return String.fromCharCode(decodedCharCode);
        });
        decodeFieldReff.value = decodedCharacters.join("");
        encodeFieldReff.value=""; 
    }
}