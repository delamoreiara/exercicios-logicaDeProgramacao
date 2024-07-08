type Usuario = {     //define cada usuario e o consumo
    nome: string;
    espaco: number;
  };
  function converterBytesMegabytes(bytes: number): number {  //conversão
    return bytes / (1024 * 1024);
  }
  function Percentual(espaco: number, totalEspaco: number): number { //percentual
    return (espaco / totalEspaco) * 100;
  }
  function Relatorio(usuarios: string[], espacos: number[]): void {
    const usuariosComEspaco: Usuario[] = [];
    let totalEspaco = 0;
    usuarios.forEach((nome, i) => {
      const espaco = espacos[i];
      usuariosComEspaco.push({
        nome,
        espaco,
      });
      totalEspaco += espaco;
    });
    usuariosComEspaco.sort((a, b) => b.espaco - a.espaco); // ordena e imprime o relatorio final
    const relatorio = usuariosComEspaco
      .map((usuario) => {
        const espacoMB = converterBytesMegabytes(usuario.espaco)
        const percentualUso = Percentual(usuario.espaco, totalEspaco)
        return `${usuario.nome} - Espaço ocupado: ${espacoMB} MB (${percentualUso}%)`;
      })
      .join('\n');
    console.log(relatorio)
  }
  
 Relatorio(["aaa", "bbb", "ccc", "ddd"], [200, 100, 130, 120]);