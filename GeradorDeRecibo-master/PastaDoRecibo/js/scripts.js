
var pix = document.getElementById("pix");
var pixContainer = document.getElementById("pixContainer");

var cheque = document.getElementById("cheque");
var chequeContainer = document.getElementById("chequeContainer");

var transferencia = document.getElementById("transferencia");
var transferenciaContainer = document.getElementById("transferenciaContainer");

var dinheiro = document.getElementById("dinheiro");

var cartao = document.getElementById("cartao");

var gerar = document.getElementById("gerar");


var dinheiroGerar = false;
var pixGerar = false;
var chequeGerar = false;
var transferenciaGerar = false;

pix.addEventListener("click", function(){
    pixContainer.style.display = "block";
    chequeContainer.style.display = "none";
    transferenciaContainer.style.display = "none";
    pixGerar = true;
    chequeGerar = false;
    dinheiroGerar = false;
    transferenciaGerar = false;
});

cheque.addEventListener("click", function(){
    chequeContainer.style.display = "block";
    pixContainer.style.display = "none";
    transferenciaContainer.style.display = "none";
    pixGerar = false;
    chequeGerar = true;
    dinheiroGerar = false;
    transferenciaGerar = false;
});

transferencia.addEventListener("click", function(){
    transferenciaContainer.style.display = "block";
    pixContainer.style.display = "none";
    chequeContainer.style.display = "none";
    pixGerar = false;
    chequeGerar = false;
    dinheiroGerar = false;
    transferenciaGerar = true;
});

dinheiro.addEventListener("click", function(){
    transferenciaContainer.style.display = "none";
    pixContainer.style.display = "none";
    chequeContainer.style.display = "none";
    pixGerar = false;
    chequeGerar = false;
    dinheiroGerar = true;
    transferenciaGerar = false;
});

cartao.addEventListener("click", function(){
    transferenciaContainer.style.display = "none";
    pixContainer.style.display = "none";
    chequeContainer.style.display = "none";
    pixGerar = false;
    chequeGerar = false;
    dinheiroGerar = false;
    transferenciaGerar = false;
})

gerar.addEventListener("click", function(){
    var valor = document.getElementById("valor").value;
    var nome_pagador = document.getElementById("nome_pagador").value;
    var cpf = document.getElementById("cpf").value;
    var referente = document.getElementById("referente").value;
    var cidade = document.getElementById("cidade").value;
    var data = document.getElementById("data").value;
    var nome_emissor = document.getElementById("nome_emissor").value;
    var telefone = document.getElementById("telefone").value;
    var cpf_2 = document.getElementById("cpf_2").value;
    
    if(dinheiroGerar == true){
        var dinheiroGerarContent = document.getElementById("dinheiroGerar");
        dinheiroGerarContent.style.display = "block";
        var retornoRecibo = "Recebi(emos) de " + nome_pagador + "- CPF/CNPJ nº " + cpf + ", a importância de " + valor + " referente à " + referente;
        console.log(retornoRecibo);
        return retornoRecibo;
    }else if(pixGerar == true){
        var pixGerarContent = document.getElementById("pixGerar");
        pixGerarContent.style.display = "block";
    }else if(chequeGerar == true){
        var chequeGerarContent = document.getElementById("chequeGerar");
        chequeGerarContent.style.display = "block";
    }else if(transferenciaGerar == true){}
});