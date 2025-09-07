class Jogo {
    constructor(jogadores = []) {
        if (!Array.isArray(jogadores) || jogadores.length < 2) {
            throw new Error("Um jogo precisa de pelo menos 2 jogadores");
        }
        this.jogadores = jogadores;
        this.vencedor = null;
        this.finalizado = false;
    }
    atualizarPontuacao(jogador, pontos) {
        if (!this.jogadores.includes(jogador)) {
            throw new Error("O jogador deve fazer parte da partida");
        }
        if (pontos < 0) {
            throw new Error("Não é permitido adicionar pontos negativos");
        }
        jogador.adicionaPontos(pontos);
    }
    getJogadores() {
        return this.jogadores;
    }

    definirVencedor(jogador) {
        if (!this.jogadores.includes(jogador)) {
            throw new Error("O vencedor deve ser um dos jogadores da partida");
        }
        this.vencedor = jogador;
    }

    getVencedor() {
        return this.vencedor;
    }
}

export default Jogo;
