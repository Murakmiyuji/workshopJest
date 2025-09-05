import Jogador from "../Entitites/jogador.js";

describe("Classe Jogador", () => {

  test("Cria jogador com nome, idade, time e pontos = 0", () => {
    const jogador = new Jogador({ nome: "Yuji", idade: 25, time: "Time A" });
    expect(jogador.getNome()).toBe("Yuji");
    expect(jogador.getIdade()).toBe(25);
    expect(jogador.getTime()).toBe("Time A");
    expect(jogador.getPontos()).toBe(0);
  });

  test("Adiciona pontos corretamente", () => {
    const jogador = new Jogador({ nome: "Yuji", idade: 25, time: "Time A" });
    jogador.adicionaPontos(10);
    expect(jogador.getPontos()).toBe(10);
  });

  test("Não permite adicionar pontos negativos", () => {
    const jogador = new Jogador({ nome: "Yuji", idade: 25, time: "Time A" });
    expect(() => {
      jogador.adicionaPontos(-5);
    }).toThrow("Proibido adicionar pontos negativos");
  });

  test("Resetar pontos volta para 0", () => {
    const jogador = new Jogador({ nome: "Yuji", idade: 25, time: "Time A" });
    jogador.adicionaPontos(15);
    expect(jogador.getPontos()).toBe(15);
    jogador.resetPontos();
    expect(jogador.getPontos()).toBe(0);
  });

  test("Validação: nome, idade e time são obrigatórios", () => {
    expect(() => new Jogador({ nome: "", idade: 25, time: "Time A" })).toThrow();
    expect(() => new Jogador({ nome: "Yuji", idade: 0, time: "Time A" })).toThrow();
    expect(() => new Jogador({ nome: "Yuji", idade: 25, time: "" })).toThrow();
  });

});
