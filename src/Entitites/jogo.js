class Jogo {
    constructor(jogadores = []) {
        if (!Array.isArray(jogadores) || jogadores.length < 2) {
            throw new Error("Um jogo precisa de pelo menos 2 jogadores");
        }
        this.jogadores = jogadores;
        this.vencedor = null;
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
