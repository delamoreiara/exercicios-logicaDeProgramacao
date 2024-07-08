/*Faça um programa que carregue uma lista com os modelos de cinco carros (exemplo de modelos: FUSCA, GOL, VECTRA etc). Carregue uma outra lista com o consumo desses carros, isto é, 
quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
O modelo do carro mais econômico;
Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 2,25 o litro.*/
function carros(modelo:string[], consumo:number[]){
    let distância:number= 1000
    let modeloEconomico:string= modelo[0]
    let consumoEconomico: number= consumo[0]
    let consumoTotal:number = 0
    let custoTotal:number=0

    for(let i=0; i<modelo.length; i++){
        if (consumo[i]>0 && consumo[i]< consumoEconomico){
            modeloEconomico = modelo[i];
            consumoEconomico = consumo[i];
        }
    }
    for(let i=0; i<modelo.length; i++){
        consumoTotal = (distância / consumo[i])
        custoTotal = (consumoTotal * 2.25)
    }
    return{
        modeloEconomico, consumoTotal, custoTotal
    }
}console.log(carros(["gol", "fusca", "vectra"],[13, 14, 10]))