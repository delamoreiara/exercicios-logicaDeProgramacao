/*Uma grande emissora de televisão quer fazer uma enquete entre os seus telespectadores para saber qual o melhor jogador após cada jogo. 
Para computar cada voto, a telefonista digitará um número, entre 1 e 23, correspondente ao número da camisa do jogador. Um número de jogador igual zero, indica que a votação foi encerrada. 
Se um número inválido for digitado, o programa deve ignorá-lo, mostrando uma breve mensagem de aviso, e voltando a pedir outro número. Após o final da votação, o programa deverá exibir:
O total de votos computados;
Os númeos e respectivos votos de todos os jogadores que receberam votos;
O percentual de votos de cada um destes jogadores;
O número do jogador escolhido como o melhor jogador da partida, juntamente com o número de votos e o percentual de votos dados a ele.
Observe que os votos inválidos e o zero final não devem ser computados como votos. O resultado aparece ordenado pelo número do jogador. O programa deve fazer uso de arrays. 
O programa deverá executar o cálculo do percentual de cada jogador através de uma função. Esta função receberá dois parâmetros: o número de votos de um jogador e o total de votos. 
A função calculará o percentual e retornará o valor calculado. Abaixo segue uma tela de exemplo. O disposição das informações deve ser o mais próxima possível ao exemplo. 
Os dados são fictícios e podem mudar a cada execução do programa. Ao final, o programa deve ainda gravar os dados referentes ao resultado da votação em um arquivo texto no disco, 
obedecendo a mesma disposição apresentada na tela.*/
function enquete(jogadores:number[]){
    const numJogadores:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    let countVotos:number[]=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let resultados:number[]=[]
    for(let i=0; i<jogadores.length; i++){
        resultados.push(jogadores[i])
        if(resultados[i]===1){
            countVotos[0]++
        }
        else if(resultados[i]===2){
            countVotos[1]++
        }
        else if(resultados[i]===3){
            countVotos[2]++
        }
        else if(resultados[i]===4){
            countVotos[3]++
        }
        else if(resultados[i]===5){
            countVotos[4]++
        }
        else if(resultados[i]===6){
            countVotos[5]++
        }
        else if(resultados[i]===7){
            countVotos[6]++
        }
        else if(resultados[i]===8){
            countVotos[7]++
        }
        else if(resultados[i]===9){
            countVotos[8]++
        }
        else if(resultados[i]===10){
            countVotos[9]++
        }
        else if(resultados[i]===11){
            countVotos[10]++
        }
        else if(resultados[i]===12){
            countVotos[11]++
        }
        else if(resultados[i]===13){
            countVotos[12]++
        }
        else if(resultados[i]===14){
            countVotos[13]++
        }
        else if(resultados[i]===15){
            countVotos[14]++
        }
        else if(resultados[i]===16){
            countVotos[15]++
        }
        else if(resultados[i]===17){
            countVotos[16]++
        }
        else if(resultados[i]===18){
            countVotos[17]++
        }
        else if(resultados[i]===19){
            countVotos[18]++
        }
        else if(resultados[i]===20){
            countVotos[19]++
        }
        else if(resultados[i]===21){
            countVotos[20]++
        }
        else if(resultados[i]===22){
            countVotos[21]++
        }
        else if(resultados[i]===23){
            countVotos[22]++
        }else{
            "Numero inválido"
        }
    }
return{
    resultados, countVotos
}
}console.log(enquete([1,5,14,23,11,14,15,8,6,4,4,5,12,3,18]))