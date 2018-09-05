var TentativasJogadorB = 0;

function GetTentativasJogadorB() {
    return TentativasJogadorB + 0;
}

function IncrementaTentativasJogadorB() {
    TentativasJogadorB++;
}

var vValorDadosJogadorB = new Array(3);
var vOperacaoDadosJogadorB;

function RandomizaDadosJogadorB() {
    vValorDadosJogadorB = new Array(
        GetRandomInt(1, 6),
        GetRandomInt(1, 6),
        GetRandomInt(1, 6)
    );
}

var PontosJogadorB = 0;
var LevelJogadorB = 1;

function GetOperacaoJogadorB() {

    // RetornaValueComboBox("abc");
    vOperacaoDadosJogadorB = new Array(
        RetornaValueComboBox('OperacaoJogadorB_Dado1'),
        RetornaValueComboBox('OperacaoJogadorB_Dado2'),
        RetornaValueComboBox('OperacaoJogadorB_Dado3')
    );

    console.log('JogadorB: operações [' + vOperacaoDadosJogadorB + '], valores [' + vValorDadosJogadorB + ']');

    IncrementaTentativasJogadorB();
    document.getElementById("TentativasJogadorB").innerText = 'Tentativa ' + GetTentativasJogadorB();

    let ResultadoOperacaoJogadorB = RetornaResultado(vOperacaoDadosJogadorB, vValorDadosJogadorB);

    document.getElementById("ResultadoOperacaoJogadorB").innerText =
        vOperacaoDadosJogadorB[0] + vValorDadosJogadorB[0] + " " +
        vOperacaoDadosJogadorB[1] + " " + vValorDadosJogadorB[1] + " " +
        vOperacaoDadosJogadorB[2] + " " + vValorDadosJogadorB[2] +
        " = " + ResultadoOperacaoJogadorB;

    if (ResultadoOperacaoJogadorB == LevelJogadorB) {
        PontosJogadorB++;
        LevelJogadorB++;
        JogadorVez = 'A';
    }

    document.getElementById("PontuacaoJogadorB").innerText = 'Pontuação: ' + PontosJogadorB;
    document.getElementById("LevelJogadorB").innerText = 'Level: ' + LevelJogadorB;

    VerificaJogadas();
}


function JogaDadosJogadorB() {
    // Atribui valores às variáveis dos dados
    RandomizaDadosJogadorB();
    // Mostra valores dos dados no HTML
    document.getElementById("ValorDado1JogadorB").innerText = vValorDadosJogadorB[0];
    document.getElementById("ValorDado2JogadorB").innerText = vValorDadosJogadorB[1];
    document.getElementById("ValorDado3JogadorB").innerText = vValorDadosJogadorB[2];

    // Mostra desenho dos dados com respectivos valores
    document.getElementById("ImgDado1JogadorB").innerHTML = '<img src="./img/dados.' + vValorDadosJogadorB[0] + '.jpg" alt="">';
    document.getElementById("ImgDado2JogadorB").innerHTML = '<img src="./img/dados.' + vValorDadosJogadorB[1] + '.jpg" alt="">';
    document.getElementById("ImgDado3JogadorB").innerHTML = '<img src="./img/dados.' + vValorDadosJogadorB[2] + '.jpg" alt="">';

    document.getElementById("SortearDadosJogadorB").disabled = true;
    document.getElementById('TestaCombinacaoJogadorB').disabled = false;
}