/*Utilize uma lista para resolver o problema a seguir. Uma empresa paga seus vendedores com base em comissões.
O vendedor recebe $200 por semana mais 9 por cento de suas vendas brutas daquela semana.
Por exemplo, um vendedor que teve vendas brutas de $3000 em uma semana recebe $200 mais 9 por cento de $3000, ou seja, um total de $470.
Escreva um programa (usando um array de contadores) que determine quantos vendedores receberam salários nos seguintes intervalos de valores:
$200 - $299
$300 - $399
$400 - $499
$500 - $599
$600 - $699
$700 - $799
$800 - $899
$900 - $999
$1000 em diante
Desafio: Crie ma fórmula para chegar na posição da lista a partir do salário, sem fazer vários ifs aninhados.*/
function comissao(salario) {
    var countVendedores = [0, 0, 0, 0, 0, 0, 0, 0];
    var salarioTotal = 0;
    for (var i = 0; i < salario.length; i++) {
        salarioTotal = 200 + (0.09 * salario[i]);
    }
    if (salarioTotal > 200 && salarioTotal < 299) {
        countVendedores[0]++;
    }
    else if (salarioTotal > 300 && salarioTotal < 399) {
        countVendedores[1]++;
    }
    else if (salarioTotal > 400 && salarioTotal < 499) {
        countVendedores[2]++;
    }
    else if (salarioTotal > 500 && salarioTotal < 599) {
        countVendedores[3]++;
    }
    else if (salarioTotal > 600 && salarioTotal < 699) {
        countVendedores[4]++;
    }
    else if (salarioTotal > 700 && salarioTotal < 799) {
        countVendedores[5]++;
    }
    else if (salarioTotal > 800 && salarioTotal < 899) {
        countVendedores[6]++;
    }
    else if (salarioTotal > 900 && salarioTotal < 999) {
        countVendedores[7]++;
    }
    else if (salarioTotal > 1000) {
        countVendedores[8]++;
    }
    return { countVendedores: countVendedores };
}
console.log(comissao([200, 300, 600, 250]));
