import Jogador from "../Entitites/jogador.js";

class JogadorService {
	constructor(jogadorRepositorio) {
		this.jogadorRepositorio = jogadorRepositorio;
	}

	async criar({nome, idade, time, pontos = 0}) {
		const jogador = new Jogador({nome, idade, time, pontos});
		const persistido = await this.jogadorRepositorio.criaJogador({
            nome: jogador.getNome(),
            idade: jogador.getIdade(),
            time: jogador.getTime(),
            pontos: jogador.getPontos()
        });
		return { jogador, persistido };
	}

	async adicionarPontosPersistindo(id, pontos) {
		const existente = await this.jogadorRepositorio.buscarPorId(id);
		if (!existente) throw new Error("Jogador não encontrado");
		const jogador = new Jogador({
            nome: existente.nome,
            idade: existente.idade,
            time: existente.time,
            pontos: existente.pontos,
        });
		jogador.adicionaPontos(pontos);
		return this.jogadorRepositorio.atualizaPontos(id, jogador.getPontos());
	}
}

export default JogadorService;