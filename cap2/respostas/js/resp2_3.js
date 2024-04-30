function calcularPromocao(){
    //referenciar valores de entrada e saida
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var out3Produto = document.getElementById("out3Produto")
    

    // obter valores de entrada
    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    //calcular promoçao
    var valorMetadePreco = preco * 0.5;
    var somaTresProdutos = preco + preco + valorMetadePreco;

    //mostrar promocao na tela
    outPromocao.textContent = `${produto} - Promoção: leve 3 por R$: ${somaTresProdutos.toFixed(2)}`;
    out3Produto.textContent = `O 3° produto custa apenas R$: ${valorMetadePreco.toFixed(2)}`;
}
// referenciar o btMostrarPromocao (botão)
var btMostrarPromocao = document.getElementById("btMostrarPromocao")
// adicionar um envento ao btMostrarPromocao pra chamar calulcarPromocao();
btMostrarPromocao.addEventListener("click", calcularPromocao)