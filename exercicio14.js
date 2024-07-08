//Utilizando listas faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//"Telefonou para a vítima?"
//"Esteve no local do crime?"
//"Mora perto da vítima?"
//"Devia para a vítima?"
//"Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
//Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" 
//e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

var prompt = require(('prompt-sync'))();
function questionario(Assassino) {

    var pergunta1 = "Telefonou para a vítima?";
    var pergunta2 = "Esteve no local do crime?";
    var pergunta3 = "Mora perto da vítima?";
    var pergunta4 = "Devia para a vítima?";
    var pergunta5 = "Já trabalhou com a vítima";
    var perguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
    var respostas = [];
    var countTrue = 0;
    var classificada = '';

    for (var i = 0; i < perguntas.length; i++) { //imprime as perguntas e recebe as respostas
        var resposta = prompt(perguntas[i] + '(sim/não): ');
        respostas.push(resposta.toLowerCase() === "sim");
    }

    for (var i = 0; i < respostas.length; i++) { //conta as resppostas "sim"
        if (respostas[i] === true)
            countTrue++;
    }

    if (countTrue === 2) { //classifica as respostas 
        classificada = "suspeito";
    }
    if (countTrue > 2 && countTrue < 5) {
        classificada = "Cúmplice";
    }
    if (countTrue === 5) {
        classificada = "Culpado";
    }
    return {
        classificada: classificada
    };
}
console.log(questionario('Assassino'));
