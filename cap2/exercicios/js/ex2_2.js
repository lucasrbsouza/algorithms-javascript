function converterDuracao() {
    // criar referencia aos elementos da pagina
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta")

    // obtem contéudo dos campos de entrada
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value)

    // arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao/60)

    //obtem o resto da divisão entre os numeros
    var minutos = duracao % 60;
    
    // altera o conteúdo dos paragrafos de resposta
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " horas(s) e " + minutos + " minuto(s)"

}

// cria uma referencia ao elemento btConverter(botão)
var btConverter = document.getElementById("btConverter")

//registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao)