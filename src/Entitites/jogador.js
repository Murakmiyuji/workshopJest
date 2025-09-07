import { jogadorValidator } from "../Validator/jogadorValidator.js";

class Jogador {
	constructor({ nome, idade, time, pontos = 0, cartoesAmarelos = 0}) {
		const result = jogadorValidator(nome, idade, time, cartoesAmarelos);
		if (!result.valid) {
			throw new Error(result.errors.join("\n"));
		}
		this.nome = nome;
		this.idade = idade;
		this.time = time;
		this.pontos = pontos;
		this.cartoesAmarelos = cartoesAmarelos;
	}
	adicionaPontos(pontos) {
		if (pontos < 0) throw new Error("Proibido adicionar pontos negativos");
		this.pontos += pontos;
	}
	resetPontos() {
		this.pontos = 0;	
	}
	adicionarCartaoAmarelo() {
		this.cartoesAmarelos += 1;
	}
	getNome() { return this.nome; }
	getIdade() { return this.idade; }
	getTime() { return this.time; }
	getPontos() { return this.pontos; }
	getCartoesAmarelos() {return this.cartoesAmarelos}
}

export default Jogador;

