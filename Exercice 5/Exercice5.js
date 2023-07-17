
function CharCalculator(){
    const str = ' JavaScript is  is is awesome \n \n and /n/nJavaScript is fun! ';
    const newStr1 = str.replace(/^\s+|\s+$/g,'');
    const newStr2 = newStr1.replace(/ {2,}/g,' ');
    const newStr3 = newStr2.replace(/^\n+|\n+$/gm,'');//need to be reviewed
    let total = str.length - newStr3.length;
    document.getElementById("result").innerHTML = total;
}