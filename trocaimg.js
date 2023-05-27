var imgAtual = "images/1.jpg";
var imgProxima = "images/3.jpg";

function trocar (){
    document.setTimeout(delayedFunction, 3000)("trocaimg").src= imgAtual;
    let aux = imgAtual;
    imgAtual = imgProxima;
    imgProxima = aux;
}