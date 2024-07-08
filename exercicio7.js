//Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.
function vetor(vetorNum) {
    var numInt = [];
    var soma = 0;
    var mult = 1;
    for (var i = 0; i < vetorNum.length; i++) {
        numInt.push(vetorNum[i]);
        soma += vetorNum[i];
        mult *= vetorNum[i];
    }
    return {
        numInt: numInt,
        soma: soma,
        mult: mult
    };
}
console.log(vetor([3, 6, 3]));
