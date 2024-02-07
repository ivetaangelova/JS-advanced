function fequestValidator(obj) {
    let methodValidation = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPattern = /^[\w.]+$/g;
    let versionValidation = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let invalidMassage = ["<", ">", "\\", "&", `'`, `"`];

    if (!methodValidation.includes(obj.method)) {

        throw new Error("Invalid request header: Invalid Method")
    }
    if (!obj.uri || !obj.uri === "*" || !obj.uri.match(uriPattern)) {

        throw new Error("Invalid request header: Invalid URI")
    }
    if (!versionValidation.includes(obj.version)) {

        throw new Error("Invalid request header: Invalid Version")
    }
    if(!obj.hasOwnProperty("message")){
        throw new Error("Invalid request header: Invalid Message")

    }
    for(let el of obj.message){

        if(invalidMassage.includes(el)){

        throw new Error("Invalid request header: Invalid Message")
        }
    }
return obj;
}
const validExsample = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};
const invalid = {
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: ''
}
fequestValidator(validExsample);
console.log('----------------------');
fequestValidator(invalid);
//"Invalid request header: Invalid {Method/URI/Version/Message}". 
