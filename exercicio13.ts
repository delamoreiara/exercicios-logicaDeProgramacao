//Faça um programa que receba a temperatura média de cada mês do ano e armazene-as em uma lista. Após isto, 
//calcule a média anual das temperaturas e ------------mostre todas as temperaturas acima da média anual, e em que mês elas ocorreram (mostrar o mês por extenso).
function lista(temperaturas:number[]){
    const nomeMeses:Array<any> = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const tempMeses:number[]=[]
    let tempMaior:number[]=[]
    let soma= 0
    let mediaAnual= 0

    for(let i=0; i<temperaturas.length; i++){
        tempMeses.push(temperaturas[i])
        soma+= temperaturas[i] 
    }

    mediaAnual= soma/temperaturas.length

    for(let i=0; i<tempMeses.length; i++){

        if(tempMeses[i]>mediaAnual){
            tempMaior.push(nomeMeses[i])
        }
    }   
return{
    mediaAnual, tempMaior
}
}console.log(lista([16,25,31,18,17,22,16,18,16,22,21,17]))