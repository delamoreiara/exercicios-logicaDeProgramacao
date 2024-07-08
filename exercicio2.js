//Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
function lista(reverse) {   
    for (var i = reverse.length - 1; i >= 0; i--) {
        reverse.push(reverse[i]);
    }
    return reverse;
}
console.log(lista([1, 2, 3, 4, 5, 6]));
