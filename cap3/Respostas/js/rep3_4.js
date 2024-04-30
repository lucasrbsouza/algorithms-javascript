function calcularTriangulo() {
    var inLado1 = document.getElementById("inLado1");
    var inLado2 = document.getElementById("inLado2");
    var inLado3 = document.getElementById("inLado3");
    var outResposta = document.getElementById("outResposta");

    var lado1 = Number(inLado1.value);
    var lado2 = Number(inLado2.value);
    var lado3 = Number(inLado3.value);

    var verificacao = (lado1 + lado2) > lado3
    var verificacao1 = (lado2 + lado3) > lado1
    var verificacao2 = (lado3 + lado1) > lado2


    if (verificacao && verificacao2 && verificacao1) {
        if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
            outResposta.textContent = `Triangulo Equilatero`
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
            outResposta.textContent = `Triangulo Isósceles`
        }else {
            outResposta.textContent = `Triangulo Escaleno`
        }
    
    }else{
        outResposta.textContent = "Não da pra fazer um trangulo com os dados informados"
    }
}
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularTriangulo);