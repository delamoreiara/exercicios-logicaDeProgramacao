/*Faça um programa que leia um número indeterminado de valores, correspondentes a notas, encerrando a entrada de dados quando 
for informado um valor igual a -1 (que não deve ser armazenado). Após esta entrada de dados, faça:
Mostre a quantidade de valores que foram lidos;
Exiba todos os valores na ordem em que foram informados, um ao lado do outro;
Exiba todos os valores na ordem inversa à que foram informados, um abaixo do outro;
Calcule e mostre a soma dos valores;
Calcule e mostre a média dos valores;
Calcule e mostre a quantidade de valores acima da média calculada;
Calcule e mostre a quantidade de valores abaixo de sete;
Encerre o programa com uma mensagem;*/

const { count } = require("console")

function valores(notas:number[]){
const listaNotas:Array<number>=[]
const listaInvers:Array<number>=[]
const acimaMedia:Array<number>=[]
const abaixoMedia:Array<number>=[]
let soma:number= 0
let media:number= 0
let countNotas:number=0 
let countAcimaMedia:number=0
let countAbaixoMedia:number=0

for(let i=0; i<notas.length; i++){
  if(notas[i]!== -1){
    listaNotas.push(notas[i])}
    countNotas++
    soma+=notas[i]
    media= soma/listaNotas.length
  }
for(let i=0; i<listaNotas.length; i++){
    if(listaNotas[i]>media){
        acimaMedia.push(listaNotas[i])
        countAcimaMedia++
    }
}
for(let i=notas.length - 1; i >= 0; i--){
    if(listaNotas[i]<media){
        abaixoMedia.push(listaNotas[i])
        countAbaixoMedia++
    }
} 
for(let i=0; i<listaInvers.length; i++){
    if(notas[i]!== -1){
    listaInvers.push(notas[i])
    } 
}
    return{
        listaNotas, listaInvers, countNotas, soma, media, acimaMedia, countAcimaMedia, abaixoMedia, countAbaixoMedia
    }
}console.log(valores([1,2,3,-1,5,6]))