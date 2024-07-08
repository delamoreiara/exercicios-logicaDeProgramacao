//Foram anotadas as idades e alturas de 30 alunos. 
//Faça um Programa que determine quantos alunos com mais de 13 anos possuem altura inferior à média de altura desses alunos.
function alunos(idade: number[], altura:number[]){
let soma=0
let count=0
let countAlunos=0
for(let i=0; i<idade.length; i++){
    if(idade[i]>13){
        soma += altura[i];
        count++;
    }     
}
let media = soma/count
for (let i = 0; i < idade.length; i++) { 
    if (idade[i] > 13, altura[i] < media) {
      countAlunos++;
    }
}
return{
    media, countAlunos
}
}console.log(alunos([12,15,16,18,12],[155,134,154,145,165]))