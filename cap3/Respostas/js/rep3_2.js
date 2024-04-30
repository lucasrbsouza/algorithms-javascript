function calcularMulta() {
    //pegar valores dos input e output
    var inVelocidadeEstrada = document.getElementById("inVelocidadeEstrada");
    var inVelocidadeMotorista = document.getElementById("inVelocidadeMotorista");
    var outMulta = document.getElementById("outMulta");

    //pegar valores
    var velocidadeEstrada = Number(inVelocidadeEstrada.value);
    var velocidadeMotorista = Number(inVelocidadeMotorista.value);

    //criar logica
    var limiteLeve = velocidadeEstrada * 1.20
   
    if (velocidadeMotorista <= velocidadeEstrada) {
        outMulta.innerText = ` a velocidade da estrada é: ${velocidadeEstrada} km
        a velocidade do motorista é: ${velocidadeMotorista} km
        Multa: SEM MULTA`
        
    }else if (velocidadeMotorista <= limiteLeve){
        outMulta.innerText = ` a velocidade da estrada é: ${velocidadeEstrada} km
        a velocidade do motorista é: ${velocidadeMotorista} km
        Multa: MULTA LEVE $`
    } else{
        outMulta.innerText = ` a velocidade da estrada é: ${velocidadeEstrada} km
        a velocidade do motorista é: ${velocidadeMotorista} km
        Multa: MULTA GRAVE $$$`
    }
    
        
        
}
function limparDados() {
    var inVelocidadeEstrada = document.getElementById("inVelocidadeEstrada");
    var inVelocidadeMotorista = document.getElementById("inVelocidadeMotorista");
    var outMulta = document.getElementById("outMulta")

    inVelocidadeEstrada.value = ""
    inVelocidadeMotorista.value = ""
    outMulta.textContent = ""
}

var btnMulta = document.getElementById("btnMulta");
btnMulta.addEventListener("click", calcularMulta)
var btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", limparDados)
