//Faça um programa que receba a temperatura média de cada mês do ano e armazene-as em uma lista. Após isto, 
//calcule a média anual das temperaturas e ------------mostre todas as temperaturas acima da média anual, e em que mês elas ocorreram (mostrar o mês por extenso).
function lista(temperaturas) {
    var nomeMeses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    var tempMeses = [];
    var tempMaior = [];
    var soma = 0;
    var mediaAnual = 0;
    for (var i = 0; i < temperaturas.length; i++) {
        tempMeses.push(temperaturas[i]);
        soma += temperaturas[i];
    }
    mediaAnual = soma / temperaturas.length;
    for (var i = 0; i < tempMeses.length; i++) {
        if (tempMeses[i] > mediaAnual) {
            tempMaior.push(nomeMeses[i]);
        }
    }
    return {
        mediaAnual: mediaAnual,
        tempMaior: tempMaior
    };
}
console.log(lista([16, 25, 31, 18, 17, 22, 16, 18, 16, 22, 21, 17]));
