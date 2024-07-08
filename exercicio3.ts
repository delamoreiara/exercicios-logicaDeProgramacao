 //Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
function calculoMedias(notas: number[]){
    let somaNotas=0
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    let mediaNotas= somaNotas / notas.length
    return{
        mediaNotas, notas
    }
}
console.log(calculoMedias([6,4,5,5,10,10]))