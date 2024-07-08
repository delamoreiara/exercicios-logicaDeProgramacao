function converterBytesMegabytes(bytes) {
    return bytes / (1024 * 1024);
}
function Percentual(espaco, totalEspaco) {
    return (espaco / totalEspaco) * 100;
}
function Relatorio(usuarios, espacos) {
    var usuariosComEspaco = [];
    var totalEspaco = 0;
    usuarios.forEach(function (nome, i) {
        var espaco = espacos[i];
        usuariosComEspaco.push({
            nome: nome,
            espaco: espaco,
        });
        totalEspaco += espaco;
    });
    usuariosComEspaco.sort(function (a, b) { return b.espaco - a.espaco; });
    var relatorio = usuariosComEspaco
        .map(function (usuario) {
        var espacoMB = converterBytesMegabytes(usuario.espaco);
        var percentualUso = Percentual(usuario.espaco, totalEspaco);
        return "".concat(usuario.nome, " - Espa\u00E7o ocupado: ").concat(espacoMB, " MB (").concat(percentualUso, "%)");
    })
        .join('\n');
    console.log(relatorio);
}
Relatorio(["aaa", "bbb", "ccc", "ddd"], [200, 100, 130, 120]);
