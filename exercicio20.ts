/*As Organizações Tabajara resolveram dar um abono aos seus colaboradores, a aplicação que servirá como uma projeção de quanto será gasto com o pagamento deste abono.
seguinte forma de cálculo:
a.Cada funcionário receberá o equivalente a 20% do seu salário bruto de dezembro; 
a.O piso do abono será de 100 reais, isto é, aqueles funcionários cujo salário for muito baixo, recebem este valor mínimo;
Seu programa deverá permitir a digitação do salário de um número indefinido (desconhecido) de salários. Um valor de salário igual a 0 (zero) encerra a digitação. 
Após a entrada de todos os dados o programa deverá calcular o valor do abono concedido a cada colaborador, de acordo com a regra definida acima. 
Ao final, o programa deverá apresentar:
O salário de cada funcionário, juntamente com o valor do abono;
O número total de funcionário processados;
O valor total a ser gasto com o pagamento do abono;
O número de funcionário que receberá o valor mínimo de 100 reais;
O maior valor pago como abono*/
function calcularAbono(salarios: number[]) {
    const abonos: number[]=[]
    const salarioBruto: number[]=[]
    let totalFuncionarios:number=0
    let totalAbono: number=0
    let numMinimoAbono: number=0
    let maiorValorAbono: number=0
    let abono:number=0
  
    for (let i = 0; i < salarios.length; i++) {
        salarioBruto.push(salarios[i])
        abono = salarioBruto[i] * 0.2;
      
        if (abono < 100) {
            abonos.push(100);
            totalAbono += 100;
            numMinimoAbono++;
        } else {
            abonos.push(abono);
            totalAbono += abono;
        }
      
        if (abono > maiorValorAbono) {
            maiorValorAbono = abono;
        }
      
        totalFuncionarios++;
    }
  
    return {
        abonos,
        totalFuncionarios,
        totalAbono,
        numMinimoAbono,
        maiorValorAbono,
    };
}console.log(calcularAbono([900, 1000, 1200, 800, 400]))
