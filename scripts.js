
function writeOnHtml(str,type ='p'){
    var ret = {
        'p' : () => document.writeln(`<p>${str}</p>`),
        'h' : () => document.writeln(`<h3>${str}</h3>`)
    }
    return ret[type]();
}
function typeOfResult(result){
    writeOnHtml(`The output type is ${typeof(result)} `);
}