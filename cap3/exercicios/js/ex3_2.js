function calcularPeso() {
    //cria referencia aos elementos manipulados pela function
    var inNome = document.getElementById('inNome');
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");

    //obtem o conteudo dos campos de edicao da pagina
    var nome = inNome.value;
    var masculino = rbMasculino.value;
    var feminino = rbFeminino.value;
    var altura = Number(inAltura.value);

    //verifica se o nome foi preenchido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo")
        inNome.focus() // posiciona (joga o foco) no campo de edicao inNome
        return;
    }

    // se altura vazio (0) ou NaN: Not-a-Number (um texto informado, por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus()
        return
    }

    // se masculino (significa se o masculino == true)
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2) //Math.pow eleva ao quadrado

    } else {
        var peso = 21 * Math.pow(altura, 2)
    }

    //apresenta a resposta (altera o contéudo da linha outResposta)
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg"
}
function limparCampos() {
    // Limpa os conteúdos dos elementos
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResposta").textContent = "";
    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
    }
// cria referencia ao elemento btCalcular e registra evento associado a calcularPeso
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);

// cria referencia ao elemento btLimpar e registra evento associado a limparCampos()
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);
  