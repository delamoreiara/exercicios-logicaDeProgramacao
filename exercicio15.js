/*Faça um programa que leia um número indeterminado de valores, correspondentes a notas, encerrando a entrada de dados quando
for informado um valor igual a -1 (que não deve ser armazenado). Após esta entrada de dados, faça:
Mostre a quantidade de valores que foram lidos;
Exiba todos os valores na ordem em que foram informados, um ao lado do outro;
Exiba todos os valores na ordem inversa à que foram informados, um abaixo do outro;
Calcule e mostre a soma dos valores;
Calcule e mostre a média dos valores;
Calcule e mostre a quantidade de valores acima da média calculada;
Calcule e mostre a quantidade de valores abaixo de sete;
Encerre o programa com uma mensagem;*/
var count = require("console").count;
function valores(notas) {
    var listaNotas = [];
    var listaInvers = [];
    var acimaMedia = [];
    var abaixoMedia = [];
    var soma = 0;
    var media = 0;
    var countNotas = 0;
    var countAcimaMedia = 0;
    var countAbaixoMedia = 0;
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] !== -1) {
            listaNotas.push(notas[i]);
        }
        countNotas++;
        soma += notas[i];
        media = soma / listaNotas.length;
    }
    for (var i = 0; i < listaNotas.length; i++) {
        if (listaNotas[i] > media) {
            acimaMedia.push(listaNotas[i]);
            countAcimaMedia++;
        }
    }
    for (var i = notas.length - 1; i >= 0; i--) {
        if (listaNotas[i] < media) {
            abaixoMedia.push(listaNotas[i]);
            countAbaixoMedia++;
        }
    }
    for (var i = 0; i < listaInvers.length; i++) {
        if (notas[i] !== -1) {
            listaInvers.push(notas[i]);
        }
    }
    return {
        listaNotas: listaNotas,
        listaInvers: listaInvers,
        countNotas: countNotas,
        soma: soma,
        media: media,
        acimaMedia: acimaMedia,
        countAcimaMedia: countAcimaMedia,
        abaixoMedia: abaixoMedia,
        countAbaixoMedia: countAbaixoMedia
    };
}
console.log(valores([1, 2, 3, -1, 5, 6]));
