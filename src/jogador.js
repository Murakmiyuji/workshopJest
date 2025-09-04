class Jogador {
    constructor(nome, idade, time) {
        if (nome === undefined || idade === undefined || time === undefined) {
            throw new Error("Nome, idade e time são obrigatórios");
        }
        this.nome = nome;
        this.idade = idade;
        this.time = time;
        this.pontos = 0;
    }

    setNome(nome) {this.nome = nome;}

    setIdade(idade) {this.idade = idade;}

    setTime(time) {this.time = time;}

    getNome() {return this.nome;}

    getIdade() {return this.idade;}

    getTime() {return this.time;}

    static criaJogador(nome, idade, time) {return new Jogador(nome, idade, time);}
    
    adicionaPontos(pontos) {
        if (pontos < 0) {
            throw new Error("Proibido adicionar pontos negativos");
        }   
        this.pontos += pontos;
    }
    getPontos() {
        return this.pontos;
    }
    resetPontos() {
        this.pontos = 0;
    }
}


export default Jogador;