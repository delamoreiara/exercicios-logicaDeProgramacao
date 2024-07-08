//Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.
function vetorLista(listaConsoantes) {
    var consoantes = [];
    for (var i = 0; i < listaConsoantes.length; i++) {
        var letra = listaConsoantes[i];
        if (letra !== "a" &&
            letra !== "e" &&
            letra !== "i" &&
            letra !== "o" &&
            letra !== "u") {
            consoantes.push(letra);
        }
    }
    return consoantes;
}
console.log(vetorLista(["a", "r", "f", "s", "q", "i", "o"]));
