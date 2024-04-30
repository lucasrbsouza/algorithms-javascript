function calcularFuso() {
    //cria uma referencia aos elementos da pagina
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    //obtém e converte o conteudo do campo inHoraBrasil
    var horaBrasil = Number(inHoraBrasil.value);

    //se não preencheu out NaN
    if (inHoraBrasil.value =="" || isNaN(horaBrasil)) {
        alert("informe a hora no brasil corretamente"); //exibe a alerta
        inHoraBrasil.focus(); //posiciona em inHoraBrasil
        return;
    }

    var horaFranca = horaBrasil + 5; //calcula o horario na França

    // se passar das 24 horas na Franca...
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24; //subtrai 24

    }
    //exibe resposta (aletra conteúdo do elemento outHoraFranca)
    outHoraFranca.textContent = "Hora na França:" + horaFranca.toFixed(2);
}
//cria uma referencia ao elemento btExibir e registra evento associado a function
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click",calcularFuso )