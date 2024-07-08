//Faça um Programa que leia 20 números inteiros e armazene-os num vetor. 
//Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.

function listaNum(numInt: number[]){   
    const vetorPar: Array<number>=[]
    const vetorImpar: Array<number>=[]
    for (let i = 0; i < numInt.length; i++) {        
            if(numInt[i] % 2 === 0 ){             
                vetorPar.push(numInt[i])
            }else{              
                vetorImpar.push(numInt[i])
            }           
    }
    return {
        numInt, vetorImpar, vetorPar   
    } 
}
console.log(listaNum([3,5,8,1,2]))
