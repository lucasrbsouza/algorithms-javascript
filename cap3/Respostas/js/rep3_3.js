function calcularTroco() {
    var inValor = document.getElementById("inValor");
    var outValores = document.getElementById("outValores");
    var tempo = 0
    var troco = 0

    var valor = Number(inValor.value);
    
    

    if (valor < 1) {
        outValores.innerHTML = "Valor Insuficiente";
    } else if (valor >= 1 && valor < 1.75) {
        tempo = 30;
        troco = valor - 1;
    } else if (valor >= 1.75 && valor < 3) {
        tempo = 60;
        troco = valor - 1.75;
    } else if (valor >= 3) {
        tempo = 120;
        troco = valor - 3;
    }

    outValores.innerHTML = "Tempo de permanência: " + tempo + " min. Troco: R$" + troco.toFixed(2);
    
}
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularTroco)