/*Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um vetor . Depois, mostre quantas vezes cada valor foi conseguido.
 Dica: use um vetor de contadores(1-6) e uma função para gerar numeros aleatórios, simulando os lançamentos dos dados.*/
function lançamento(dados) {
    var numDados = [];
    var count = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < dados.length; i++) {
        numDados.push(dados[i]);
        if (numDados[i] === 1) {
            count[0]++;
        }
        else if (numDados[i] === 2) {
            count[1]++;
        }
        else if (numDados[i] === 3) {
            count[2]++;
        }
        else if (numDados[i] === 4) {
            count[3]++;
        }
        else if (numDados[i] === 5) {
            count[4]++;
        }
        else if (numDados[i] === 6) {
            count[5]++;
        }
    }
    return {
        numDados: numDados,
        count: count
    };
}
console.log(lançamento([2, 2, 3, 4, 5, 2, 4, 6, 3, 1, 1]));
