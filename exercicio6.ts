//Faça um Programa que peça as quatro notas de 10 alunos
// calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.
function listaNotas (nota: number[][]){
    const mediaAlunos: Array<number>= []
    let aprovados=0
    for (let i = 0; i < nota.length; i++) {
        const notas = nota[i]
        let soma = 0;   
        for (let j = 0; j < notas.length; j++) {
          const nota = notas[j]
          soma += nota;
        }   
        const mediaNotas = soma / notas.length;
        mediaAlunos.push(mediaNotas)
        if (mediaNotas > 7.0) {
          aprovados++;
        }
      }
    return{
        aprovados, mediaAlunos
    }
}console.log(listaNotas([
    [6, 8, 3, 5],
    [6, 10, 8, 5],
    [6, 8, 9, 25],
    [6, 9, 3, 15],
    [6, 7, 8, 15],
  ]))



