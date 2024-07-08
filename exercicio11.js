//Altere o programa anterior, intercalando 3 vetores de 10 elementos cada.
function vetores(vetor1, vetor2, vetor3) {
    var vetor4 = [];
    for (var i = 0; i < vetor1.length; i++) {
        vetor4.push(vetor1[i], vetor2[i], vetor3[i]);
    }
    return vetor4;
}
console.log(vetores([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]));
