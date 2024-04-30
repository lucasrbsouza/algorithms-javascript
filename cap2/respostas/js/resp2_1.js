function mostrarValor() {
    // pegando as referencias dos elementos pelo id
    var inMedicamento = document.getElementById("inMedicamento")
    var inPreco = document.getElementById("inPreco")
    var outPromocao = document.getElementById("outPromocao")
    var outValor = document.getElementById("outValor")

    //obtem conteudos de entrada
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    //calcular o valor da promocao
    var promocao = Math.floor(preco) * 2

    //mostrar os conteudo de saida
    outPromocao.textContent = "Promoção de " + medicamento;
    outValor.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}
//cria referencia ao elemento de btPromocao(botão)
var btPromocao = document.getElementById("btPromocao");
// registra um envento ao botao para careegar a função mostrarValor
btPromocao.addEventListener("click", mostrarValor)