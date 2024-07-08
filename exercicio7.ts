//Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.
function vetor(vetorNum: number[]){
    const numInt: Array<number>= []   
    let soma = 0
    let mult = 1

    for (let i = 0; i<vetorNum.length; i++){
        numInt.push(vetorNum[i]);
        soma += vetorNum[i];
        mult *= vetorNum[i];       
    }
    return{
        numInt, soma, mult
    }
}console.log(vetor([3,6,3]))

