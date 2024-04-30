function calcularPreco() {
    // cria referencia aos elementos da pagina
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor")

    //obtem conteudo dos campos de entrada
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    //calcula o valor a ser pago
    var valor = (quilo/1000) * consumo;
    //altera o conteudo da linha de resposta
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);

}

//cria referencia ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular")
//registra um evetno associado ao botao para carregar uma função
btCalcular.addEventListener("click", calcularPreco)