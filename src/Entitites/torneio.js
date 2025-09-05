class Torneio {
    constructor() {
        this.jogadores = [];
    }

    adicionarJogador(jogador) {
        this.jogadores.push(jogador);
    }

    registrarVencedor(jogo, pontos = 3) {
        const vencedor = jogo.getVencedor();
        if (!vencedor) throw new Error("Jogo sem vencedor");
        vencedor.adicionaPontos(pontos);
    }

    gerarRanking() {
        return [...this.jogadores].sort((a, b) => b.getPontos() - a.getPontos());
    }
}
