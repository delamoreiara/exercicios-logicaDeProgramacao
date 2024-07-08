//Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos,
// cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.

function vetores(vetor1: number[], vetor2:number[]){
const vetor3: Array<number>=[]
   for(let i = 0; i <vetor1.length; i++){
        vetor3.push(vetor1[i], vetor2[i])
    }
    return vetor3
}console.log(vetores([1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20]))