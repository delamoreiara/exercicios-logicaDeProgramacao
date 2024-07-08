//Faça um Programa que peça a idade e a altura de 5 pessoas,
// armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.

function pessoas(dados: number[][]){

const vetorIdade: Array<number>=[]
const vetorAltura: Array<number>=[]

let idade= 0
let altura= 0
let vetorInverso: Array<number>=[]

    for(let i = dados.length - 1; i >= 0; i--){

        vetorIdade.push(dados[i][0])
        vetorAltura.push(dados[i][1])
        vetorInverso.push(dados[i][i])   
    }
return{
    vetorAltura, vetorIdade, vetorInverso
}
}console.log(pessoas([[20, 167],
[16, 156],
[17, 169],
[19, 170],
[20, 160],]))