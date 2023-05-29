
var imgAtual = "images/fundo1.jpg";
var imgAnterior = "images/fundo2.jpg";
var imgAnterior1 = "images/fundo3.jpg";
var imgAnterior2 = "images/fundo4.jpg";

function trocar(){
    document.getElementById("trocaimagem").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
    aux = imgAtual;
    imgAtual = imgAnterior1;
    imgAnterior1 = aux;
    aux = imgAtual;
    imgAtual = imgAnterior2;
    imgAnterior2 = aux;
}


