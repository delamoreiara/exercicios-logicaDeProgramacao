//Utilizando listas faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//"Telefonou para a vítima?"
//"Esteve no local do crime?"
//"Mora perto da vítima?"
//"Devia para a vítima?"
//"Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
//Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" 
//e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

function questionario(Assassino: string){

const prompt = require(('prompt-sync')as any)();
const pergunta1:string="Telefonou para a vítima?"
const pergunta2:string="Esteve no local do crime?"
const pergunta3:string="Mora perto da vítima?"
const pergunta4:string="Devia para a vítima?"
const pergunta5:string="Já trabalhou com a vítima"
const perguntas:string[] = [pergunta1,pergunta2,pergunta3,pergunta4,pergunta5]

const respostas:boolean[]=[];
let countTrue:number= 0;
let classificada:string='';

for(let i=0; i<perguntas.length; i++){
    const resposta:any = prompt(perguntas[i]+ '(sim/não): ');
    respostas.push(resposta.toLowerCase()==="sim");
}
for(let i=0; i< respostas.length; i++){
   if(respostas[i]===true)
   countTrue++}
if(countTrue===2){
     classificada= "suspeito";
}if(countTrue>2 && countTrue<5){
    classificada= "Cúmplice"
}if(countTrue===5){ 
    classificada= "Culpado"
}

return{
   classificada
}
}console.log(questionario('Assassino'))