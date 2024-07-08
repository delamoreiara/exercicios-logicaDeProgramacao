/*Uma empresa de pesquisas precisa tabular os resultados da seguinte enquete feita a um grande quantidade de organizações:
"Qual o melhor Sistema Operacional para uso em servidores?"
As possíveis respostas são:
1- Windows Server 2- Unix 3- Linux 4- Netware 5- Mac OS 6- Outro
Você foi contratado para desenvolver um programa que leia o resultado da enquete e informe ao final o resultado da mesma. O programa deverá ler os valores até ser informado o valor 0, 
que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 6). Os valores referentes a cada uma das opções devem ser armazenados num vetor. 
Após os dados terem sido completamente informados, o programa deverá calcular a percentual de cada um dos concorrentes e informar o vencedor da enquete.*/
function votos(sistema:number[]){
    const opções:any[]=[1+'-Windows',2+'-Unix',3+'-Linux',4+'-Netware',5+'-Mac',6+'-Outro']
    const totalVotos: number = sistema.length;
    let respostas:number[]=[]
    let count:number[]=[0,0,0,0,0,0]
    let vencedor:string="";
    let percentualMaior: number=0
    
    for(let i=0; i<sistema.length; i++){
        respostas.push(sistema[i])
        if(respostas[i]===1){
            count[0]++
        }
        else if(respostas[i]===2){
            count[1]++
        }
        else if(respostas[i]===3){
            count[2]++
        }
        else if(respostas[i]===4){
            count[3]++
        }
        else if(respostas[i]===5){
            count[4]++
        }
        else if(respostas[i]===6){
            count[5]++
        }
    for(let i=0; i<count.length; i++){
        const percentual = (count[i] / totalVotos) * 100;
        if(percentual>percentualMaior){
            percentualMaior = percentual;
            vencedor = opções[i];
        }

    }
    }
    return{
        respostas, count, vencedor, percentualMaior
    }
}console.log(votos([1,1,3,4,2,6,1,3]))