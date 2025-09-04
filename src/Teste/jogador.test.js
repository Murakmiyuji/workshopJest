import Jogador from "../jogador.js";

test("Cria jogador com nome, idade, time e pontos = 0", () => {
  const jogador = new Jogador("Yuji", 25, "Time A");
  expect(jogador.getNome()).toBe("Yuji");
  expect(jogador.getIdade()).toBe(25);
  expect(jogador.getTime()).toBe("Time A");
  expect(jogador.getPontos()).toBe(0);
});

test("Adiciona pontos corretamente", () => {
  const jogador = new Jogador("Yuji", 25, "Time A");
  jogador.adicionaPontos(10);
  expect(jogador.getPontos()).toBe(10);
});

test("Não permite adicionar pontos negativos", () => {
  const jogador = new Jogador("Yuji", 25, "Time A");
  expect(() => {
    jogador.adicionaPontos(-5);
  }).toThrow("Proibido adicionar pontos negativos");
});
