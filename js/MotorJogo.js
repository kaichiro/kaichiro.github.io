function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RetornaValueComboBox(IdOfElement) {
    var e = document.getElementById(IdOfElement);
    return itemSelecionado = e.options[e.selectedIndex].text + ""; //testo
    // return itemSelecionado = e.options[e.selectedIndex].value +""; //valor
}

function PopulaComboBox(pSinais) {
    let qtde = pSinais
}

var JogadorVez = '';

function VerificaJogadas() {
    if (GetTentativasJogadorA() >= QtdeTestePorJogada || JogadorVez == 'B') {
        document.getElementById("SortearDadosJogadorB").disabled = false;
        document.getElementById("TestaCombinacaoJogadorA").disabled = true;
        TentativasJogadorA = 0;
        JogadorVez = '';
    } else if (GetTentativasJogadorB() >= QtdeTestePorJogada || JogadorVez == 'A') {
        document.getElementById("SortearDadosJogadorA").disabled = false;
        document.getElementById("TestaCombinacaoJogadorB").disabled = true;
        TentativasJogadorB = 0;
        JogadorVez = '';
    }

    if (PontosJogadorA == MaxLevel || PontosJogadorB == MaxLevel) {
        document.getElementById('SortearDadosJogadorA').disabled = true;
        document.getElementById('SortearDadosJogadorB').disabled = true;

        document.getElementById('TestaCombinacaoJogadorA').disabled = true;
        document.getElementById('TestaCombinacaoJogadorB').disabled = true;

        if (PontosJogadorA == MaxLevel) {
            document.getElementById('BoasVindasJogo').innerText += ' (JOGADOR A ganhou o jogo)';
            document.getElementById('MaxLevel').disabled = false;
            document.getElementById('QtdeTestePorJogada').disabled = false;
        }

        if (PontosJogadorB == MaxLevel) {
            document.getElementById('BoasVindasJogo').innerText += ' (JOGADOR B ganhou o jogo)';
            document.getElementById('MaxLevel').disabled = false;
            document.getElementById('QtdeTestePorJogada').disabled = false;
        }
    }

}

function InicializarPagina() {
    document.getElementById('SortearDadosJogadorA').disabled = true;
    document.getElementById('SortearDadosJogadorB').disabled = true;

    document.getElementById('TestaCombinacaoJogadorA').disabled = true;
    document.getElementById('TestaCombinacaoJogadorB').disabled = true;
}

var MaxLevel = 0;
var QtdeTestePorJogada = 0;

function IniciarJogo() {
    document.getElementById('SortearDadosJogadorA').disabled = false;
    document.getElementById('SortearDadosJogadorB').disabled = true;

    document.getElementById('MaxLevel').disabled = true;
    document.getElementById('QtdeTestePorJogada').disabled = true;

    MaxLevel = document.getElementById('MaxLevel').value;
    QtdeTestePorJogada = document.getElementById('QtdeTestePorJogada').value;

    document.getElementById('BoasVindasJogo').innerText = 'Jogo - Dados com Arranjo Aritmético';
}

function RetornaResultado(pSinais, pValores) {
    return 1 *
        (pSinais[0] == "+" && pSinais[1] == "+" && pSinais[2] == "+" ? (+pValores[0] + pValores[1] + pValores[2]) :
            (pSinais[0] == "+" && pSinais[1] == "+" && pSinais[2] == "-" ? (+pValores[0] + pValores[1] - pValores[2]) :
                (pSinais[0] == "+" && pSinais[1] == "+" && pSinais[2] == "*" ? (+pValores[0] + pValores[1] * pValores[2]) :
                    (pSinais[0] == "+" && pSinais[1] == "+" && pSinais[2] == "/" ? (+pValores[0] + pValores[1] / pValores[2]) :
                        (pSinais[0] == "+" && pSinais[1] == "-" && pSinais[2] == "+" ? (+pValores[0] - pValores[1] + pValores[2]) :
                            (pSinais[0] == "+" && pSinais[1] == "-" && pSinais[2] == "-" ? (+pValores[0] - pValores[1] - pValores[2]) :
                                (pSinais[0] == "+" && pSinais[1] == "-" && pSinais[2] == "*" ? (+pValores[0] - pValores[1] * pValores[2]) :
                                    (pSinais[0] == "+" && pSinais[1] == "-" && pSinais[2] == "/" ? (+pValores[0] - pValores[1] / pValores[2]) :
                                        (pSinais[0] == "+" && pSinais[1] == "*" && pSinais[2] == "+" ? (+pValores[0] * pValores[1] + pValores[2]) :
                                            (pSinais[0] == "+" && pSinais[1] == "*" && pSinais[2] == "-" ? (+pValores[0] * pValores[1] - pValores[2]) :
                                                (pSinais[0] == "+" && pSinais[1] == "*" && pSinais[2] == "*" ? (+pValores[0] * pValores[1] * pValores[2]) :
                                                    (pSinais[0] == "+" && pSinais[1] == "*" && pSinais[2] == "/" ? (+pValores[0] * pValores[1] / pValores[2]) :
                                                        (pSinais[0] == "+" && pSinais[1] == "/" && pSinais[2] == "+" ? (+pValores[0] / pValores[1] + pValores[2]) :
                                                            (pSinais[0] == "+" && pSinais[1] == "/" && pSinais[2] == "-" ? (+pValores[0] / pValores[1] - pValores[2]) :
                                                                (pSinais[0] == "+" && pSinais[1] == "/" && pSinais[2] == "*" ? (+pValores[0] / pValores[1] * pValores[2]) :
                                                                    (pSinais[0] == "+" && pSinais[1] == "/" && pSinais[2] == "/" ? (+pValores[0] / pValores[1] / pValores[2]) :
                                                                        (pSinais[0] == "-" && pSinais[1] == "+" && pSinais[2] == "+" ? (-pValores[0] + pValores[1] + pValores[2]) :
                                                                            (pSinais[0] == "-" && pSinais[1] == "+" && pSinais[2] == "-" ? (-pValores[0] + pValores[1] - pValores[2]) :
                                                                                (pSinais[0] == "-" && pSinais[1] == "+" && pSinais[2] == "*" ? (-pValores[0] + pValores[1] * pValores[2]) :
                                                                                    (pSinais[0] == "-" && pSinais[1] == "+" && pSinais[2] == "/" ? (-pValores[0] + pValores[1] / pValores[2]) :
                                                                                        (pSinais[0] == "-" && pSinais[1] == "-" && pSinais[2] == "+" ? (-pValores[0] - pValores[1] + pValores[2]) :
                                                                                            (pSinais[0] == "-" && pSinais[1] == "-" && pSinais[2] == "-" ? (-pValores[0] - pValores[1] - pValores[2]) :
                                                                                                (pSinais[0] == "-" && pSinais[1] == "-" && pSinais[2] == "*" ? (-pValores[0] - pValores[1] * pValores[2]) :
                                                                                                    (pSinais[0] == "-" && pSinais[1] == "-" && pSinais[2] == "/" ? (-pValores[0] - pValores[1] / pValores[2]) :
                                                                                                        (pSinais[0] == "-" && pSinais[1] == "*" && pSinais[2] == "+" ? (-pValores[0] * pValores[1] + pValores[2]) :
                                                                                                            (pSinais[0] == "-" && pSinais[1] == "*" && pSinais[2] == "-" ? (-pValores[0] * pValores[1] - pValores[2]) :
                                                                                                                (pSinais[0] == "-" && pSinais[1] == "*" && pSinais[2] == "*" ? (-pValores[0] * pValores[1] * pValores[2]) :
                                                                                                                    (pSinais[0] == "-" && pSinais[1] == "*" && pSinais[2] == "/" ? (-pValores[0] * pValores[1] / pValores[2]) :
                                                                                                                        (pSinais[0] == "-" && pSinais[1] == "/" && pSinais[2] == "+" ? (-pValores[0] / pValores[1] + pValores[2]) :
                                                                                                                            (pSinais[0] == "-" && pSinais[1] == "/" && pSinais[2] == "-" ? (-pValores[0] / pValores[1] - pValores[2]) :
                                                                                                                                (pSinais[0] == "-" && pSinais[1] == "/" && pSinais[2] == "*" ? (-pValores[0] / pValores[1] * pValores[2]) :
                                                                                                                                    (pSinais[0] == "-" && pSinais[1] == "/" && pSinais[2] == "/" ? (-pValores[0] / pValores[1] / pValores[2]) :
                                                                                                                                        0))))))))))))))))))))))))))))))));
}