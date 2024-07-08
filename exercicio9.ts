//Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.

function vetor(inteiros: number[]){
    let soma = 0
    let quadrados: number=0
    for (let i = 0; i<inteiros.length; i++){
        quadrados = inteiros[i]**2;
        soma += quadrados      
    }
    return soma
}console.log(vetor([2,4,6,8,3,7,1]))