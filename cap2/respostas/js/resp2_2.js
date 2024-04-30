function calcularValor() {
    var inValor = document.getElementById("inValor")
    var inTempoDeUso = document.getElementById("inTempoDeUso")
    var outValor = document.getElementById("outValor")

    //obter valores do input
    var valor = Number(inValor.value);
    var tempoDeUso = Number(inTempoDeUso.value)

    //calculo  do valor a ser pago
    var calculoValorPorMinuto = Math.ceil(tempoDeUso/ 15) * valor

    // obter valores do calculo e mostrar na tela
    outValor.textContent = "O valor a Pagar R$: " + calculoValorPorMinuto.toFixed(2);
}
// adicionar referencia ao btCalcularValor(botao)
var btCalcularValor = document.getElementById("btCalcularValor")
// adicionar evento ao btCalcularValor para chamar calcularValor()
btCalcularValor.addEventListener("click", calcularValor)