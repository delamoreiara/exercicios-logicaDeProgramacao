/*Em uma competição de salto em distância cada atleta tem direito a cinco saltos.
O resultado do atleta será determinado pela média dos cinco valores restantes.
Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe o nome, os saltos e a média dos saltos.
O programa deve ser encerrado quando não for informado o nome do atleta. */
function atleta(nome, saltos) {
    if (!nome) {
        return "Preencha um nome";
    }
    var distancias = [];
    var nomeAtleta = nome;
    var soma = 0;
    var mediaSaltos = 0;
    for (var i = 0; i < saltos.length; i++) {
        distancias.push(saltos[i]);
        nomeAtleta == nome;
        soma += saltos[i];
        mediaSaltos = soma / saltos.length;
        if (nome = "") {
            break;
        }
    }
    return {
        nomeAtleta: nomeAtleta,
        distancias: distancias,
        mediaSaltos: mediaSaltos
    };
}
console.log(atleta('', [6, 7, 3, 5, 4]));
