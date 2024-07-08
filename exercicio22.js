/* testar todos os cerca de 200 mouses que se encontram lá, testando e anotando o estado de cada um deles, para verificar o que se pode aproveitar deles.
Foi requisitado que você desenvolva um programa para registrar este levantamento. O programa deverá receber um número indeterminado de entradas, cada uma contendo:
um número de identificação do mouse
o tipo de defeito:
necessita da esfera;
necessita de limpeza;
a.necessita troca do cabo ou conector;
a.quebrado ou inutilizado
Uma identificação igual a zero encerra o programa?*/
function mouses(id, defeito) {
    var possiveisDefeitos = [];
    var counters = {
        sphereNeeded: 0,
        cleaningNeeded: 0,
        cablesNeeded: 0,
        broken: 0,
    };
    var mouse = [];
    for (var i = 0; i < id.length; i++) {
        possiveisDefeitos.push(defeito[i]);
        mouse.push(id[i]);
        if (possiveisDefeitos[i] === 'Necessita da esfera') {
            counters.sphereNeeded++;
        }
        else if (possiveisDefeitos[i] === 'Necessita de limpeza') {
            counters.cleaningNeeded++;
        }
        else if (possiveisDefeitos[i] === 'Necessita troca do cabo ou conector') {
            counters.cablesNeeded++;
        }
        else if (possiveisDefeitos[i] === 'Quebrado ou inutilizado') {
            counters.broken++;
        }
    }
    return {
        mouse: mouse,
        counters: counters
    };
}
console.log(mouses([123, 234, 345, 456], ["Necessita de limpeza", "Necessita de limpeza", "Quebrado ou inutilizado", "Necessita da esfera"]));
