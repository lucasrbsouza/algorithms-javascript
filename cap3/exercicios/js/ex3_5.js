function calcularRaiz() {
    //cria uma referenica aos elementos da pagina
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value); //obtem conteudo do campo inNumero

    //se não preemcheu ou NaN
    if (numero == 0 || isNaN(numero)) {
        alert("informe um nuemro válido..."); //exibe alerta
        inNumero.focus; // posiciona no campo inNumero
        return; //retorna
    }

    var raiz = Math.sqrt(numero); //calcula raiz quadrada do numero

    //se valor da variavel raiz iguka a este valor arrendodado para baixo
    if (raiz==Math.floor(raiz)) {
        outResposta.textContent = "Raiz: " + raiz; //mostra a raiz

    }else{
        //senão exibe mensagem indicando que não há raiz exata
        outResposta.textContent = "Não há raiz exata para " + numero;
    }

}
//cria referencia ao elemento btExibir e registra evento que irá carregar function
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz)