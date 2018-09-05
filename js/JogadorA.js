var TentativasJogadorA = 0;

function GetTentativasJogadorA() {
    return TentativasJogadorA + 0;
}

function IncrementaTentativasJogadorA() {
    TentativasJogadorA++;
}

var vValorDadosJogadorA = new Array(3);
var vOperacaoDadosJogadorA;

function RandomizaDadosJogadorA() {
    vValorDadosJogadorA = new Array(
        GetRandomInt(1, 6),
        GetRandomInt(1, 6),
        GetRandomInt(1, 6)
    );
}

var PontosJogadorA = 0;
var LevelJogadorA = 1;

function GetOperacaoJogadorA() {

    // RetornaValueComboBox("abc");
    vOperacaoDadosJogadorA = new Array(
        RetornaValueComboBox('OperacaoJogadorA_Dado1'),
        RetornaValueComboBox('OperacaoJogadorA_Dado2'),
        RetornaValueComboBox('OperacaoJogadorA_Dado3')
    );

    console.log('JogadorA: operações [' + vOperacaoDadosJogadorA + '], valores [' + vValorDadosJogadorA + ']');

    IncrementaTentativasJogadorA();
    document.getElementById("TentativasJogadorA").innerText = 'Tentativa ' + GetTentativasJogadorA();

    let ResultadoOperacaoJogadorA = RetornaResultado(vOperacaoDadosJogadorA, vValorDadosJogadorA);

    document.getElementById("ResultadoOperacaoJogadorA").innerText =
        vOperacaoDadosJogadorA[0] + vValorDadosJogadorA[0] + " " +
        vOperacaoDadosJogadorA[1] + " " + vValorDadosJogadorA[1] + " " +
        vOperacaoDadosJogadorA[2] + " " + vValorDadosJogadorA[2] +
        " = " + ResultadoOperacaoJogadorA;

    if (ResultadoOperacaoJogadorA == LevelJogadorA) {
        PontosJogadorA++;
        LevelJogadorA++;
        JogadorVez = 'B';
    }

    document.getElementById("PontuacaoJogadorA").innerText = 'Pontuação: ' + PontosJogadorA;
    document.getElementById("LevelJogadorA").innerText = 'Level: ' + LevelJogadorA;

    VerificaJogadas();
}


function JogaDadosJogadorA() {
    // Atribui valores às variáveis dos dados
    RandomizaDadosJogadorA();
    // Mostra valores dos dados no HTML
    document.getElementById("ValorDado1JogadorA").innerText = vValorDadosJogadorA[0];
    document.getElementById("ValorDado2JogadorA").innerText = vValorDadosJogadorA[1];
    document.getElementById("ValorDado3JogadorA").innerText = vValorDadosJogadorA[2];

    // Mostra desenho dos dados com respectivos valores
    document.getElementById("ImgDado1JogadorA").innerHTML = '<img src="./img/dados.' + vValorDadosJogadorA[0] + '.jpg" alt="">';
    document.getElementById("ImgDado2JogadorA").innerHTML = '<img src="./img/dados.' + vValorDadosJogadorA[1] + '.jpg" alt="">';
    document.getElementById("ImgDado3JogadorA").innerHTML = '<img src="./img/dados.' + vValorDadosJogadorA[2] + '.jpg" alt="">';

    document.getElementById("SortearDadosJogadorA").disabled = true;
    document.getElementById('TestaCombinacaoJogadorA').disabled = false;
}