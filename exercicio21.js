/*Faça um programa que carregue uma lista com os modelos de cinco carros (exemplo de modelos: FUSCA, GOL, VECTRA etc). Carregue uma outra lista com o consumo desses carros, isto é,
quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
O modelo do carro mais econômico;
Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 2,25 o litro.*/
function carros(modelo, consumo) {
    var distância = 1000;
    var modeloEconomico = modelo[0];
    var consumoEconomico = consumo[0];
    var consumoTotal = 0;
    var custoTotal = 0;
    for (var i = 0; i < modelo.length; i++) {
        if (consumo[i] > 0 && consumo[i] < consumoEconomico) {
            modeloEconomico = modelo[i];
            consumoEconomico = consumo[i];
        }
    }
    for (var i = 0; i < modelo.length; i++) {
        consumoTotal = (distância / consumo[i]);
        custoTotal = (consumoTotal * 2.25);
    }
    return {
        modeloEconomico: modeloEconomico,
        consumoTotal: consumoTotal,
        custoTotal: custoTotal
    };
}
console.log(carros(["gol", "fusca", "vectra"], [13, 14, 10]));
