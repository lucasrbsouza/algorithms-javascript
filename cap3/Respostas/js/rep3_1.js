function calcularIsImparPar() {
    // criar referencia aos input e output
    var inNumero = document.getElementById("inNumero");
    var outResultado = document.getElementById("outResultado");

    //pegar os valores
    var numero = Number(inNumero.value);
   // var resultado = Number(outResultado.value);

    //criar a logica do impar ou par
    if (numero % 2 == 0) {
        //mostrar resultado
        outResultado.textContent = `${numero} é um numero par`;
    }else{
        outResultado.textContent = `${numero} é um numero impar`;
    }

}
//criar referencia para o botão btnCalcular
var btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularIsImparPar);