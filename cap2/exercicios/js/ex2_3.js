function mostrarPromocao() {
    // cria referencia aos elementos manipulados pelo programa
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo")
    var outEntrada = document.getElementById("outEntrada")
    var outParcela = document.getElementById("outParcela")

    //obtem conteudos dos campos de entrada
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    //calcula o valor da entrada e das parcelas
    var entrada = preco * 0.50;
    var parcela = (preco * 0.50) / 12;

    //altera o conteudo dos paragrafos de resposta
    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}

//cria uma referencia ao elemento btVerPromocao(botão)
var btVerPromocao = document.getElementById("btVerPromocao");
//registra um evento associado ao botao, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao)

