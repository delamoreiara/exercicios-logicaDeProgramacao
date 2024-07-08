//Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
function calculoMedias(notas) {
    var somaNotas = 0;
    for (var i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    var mediaNotas = somaNotas / notas.length;
    return {
        mediaNotas: mediaNotas, notas
    };
}
console.log(calculoMedias([6, 4, 5, 5, 10, 10]));
